import { useEffect, useRef, useState } from "react"
import * as esbuild from "esbuild-wasm"
import { createRoot } from "react-dom/client"
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin"

const App = () => {
  const [input, setInput] = useState("")
  const [code, setCode] = useState("")
  const ref = useRef<any>()

  useEffect(() => {
    startService()
  }, [])

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
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
      plugins: [unpkgPathPlugin(input)],
      define: { "process.env.NODE_ENV": '"production"', global: "window" },
    })

    setCode(result.outputFiles[0].text)
  }

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>

      <pre>{code}</pre>
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)
