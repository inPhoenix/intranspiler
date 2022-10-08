import * as esbuild from "esbuild-wasm"
import { createRoot } from "react-dom/client"
import { useEffect, useRef, useState } from "react"

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
    const result = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    })
    console.log("result", result)
    setCode(result.code)
  }

  const example = `const App = () => <div> Hi There </div>`
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
