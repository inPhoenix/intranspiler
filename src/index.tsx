import { useEffect, useRef, useState } from "react"
import * as esbuild from "esbuild-wasm"
import { createRoot } from "react-dom/client"
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin"
import { fetchPlugin } from "./plugins/fetch-plugin"
import Footer from "./components/Footer/Footer"
import CodeEditor from "./components/CodeEditor/CodeEditor"
import Header from "./components/Header/Header"
import Preview from "./components/Preview/Preview"

import "bulmaswatch/nuclear/bulmaswatch.min.css"
import "./index.scss"
import ReactSnippet from "./components/Snippets/ReactSnippet"
import ConsoleSnippet from "./components/Snippets/ConsoleSnippet"

const App = () => {
  const [input, setInput] = useState("")
  const [code, setCode] = useState("")
  const ref = useRef<any>()

  useEffect(() => {
    startService()
    console.log("%c Service Started", "background: white; color: red")
  }, [])

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
    })
  }

  const onClick = async () => {
    if (!ref.current) {
      return
    }

    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: { "process.env.NODE_ENV": '"production"', global: "window" },
    })

    setCode(result.outputFiles[0].text)
  }

  const snippetReact = () => {
    setInput(ReactSnippet)
  }

  const consoleSnippet = () => {
    setInput(ConsoleSnippet)
  }

  return (
    <div className="mainWrapper">
      <Header snippetReact={snippetReact} consoleSnippet={consoleSnippet} />
      <div>
        <div>
          <div style={{ paddingTop: "30px" }}>
            <CodeEditor
              initialValue={input}
              onChange={(value) => setInput(value)}
            />
          </div>
        </div>
        <div>
          <button className="button button-submit is-primary" onClick={onClick}>
            Submit
          </button>
        </div>
      </div>
      <div className="iframe">
        <Preview code={code} />
      </div>
      <Footer />
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)
