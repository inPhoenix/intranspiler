import * as esbuild from "esbuild-wasm"
import axios from "axios"
import localforage from "localforage"

const fileCache = localforage.createInstance({
  name: "filecache",
})

export const unpkgPathPlugin = (inputCode: string) => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      // handle root entry file of 'index.js'
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { path: "index.js", namespace: "a" }
      })
      // handle relative paths in a module
      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        return {
          namespace: "a",
          path: new URL(args.path, "https://unpkg.com" + args.resolveDir + "/")
            .href,
        }
      })
      // handle main file of a module
      build.onResolve({ filter: /(^index\.js$)/ }, (args: any) => {
        return {
          namespace: "a",
          path: `https://unpkg.com/${args.path}`,
        }
      })

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        )
        if (cachedResult) {
          return cachedResult
        }
        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: inputCode,
          }
        }
        const { data, request } = await axios.get(args.path)
        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: data,
          resolveDir: new URL("./", request.responseURL).pathname,
        }
        await fileCache.setItem(args.path, result)
        return result
      })
    },
  }
}
