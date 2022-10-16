import { useEffect, useRef, useState } from "react"
import * as esbuild from "esbuild-wasm"
import { createRoot } from "react-dom/client"
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin"
import { fetchPlugin } from "./plugins/fetch-plugin"
import CodeEditor from "./components/CodeEditor"

import "./index.scss"

const App = () => {
  const [input, setInput] = useState("")
  const ref = useRef<any>()
  const iFrame = useRef<any>()

  const html = `
    <html lang="en">
      <head>
       <title>CyberPunk Editor</title>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
            eval(event.data)  
            } catch(err) {
              console.log('%c error', 'background: white; color: red', err);
              const root = document.querySelector('#root')
              root.innerHTML = '<div style="color: red">' + err + '</div>'
            }
          }, false)
        </script>
      </body>  
    </html>
  `

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
    iFrame.current.srcdoc = html

    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: { "process.env.NODE_ENV": '"production"', global: "window" },
    })

    // setCode(result.outputFiles[0].text)
    iFrame.current.contentWindow.postMessage(result.outputFiles[0].text, "*")
  }

  const snippetReact = () => {
    setInput(
      `
import React from 'react'
import ReactDOM from 'react-dom'
const App = () => <h1> Hi There !</h1>
ReactDOM.render(<App />, document.querySelector('#root'))
      `
    )
  }

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        background: "#1c1242",
      }}
    >
      <div>
        <button onClick={snippetReact}>Code snippet</button>
        <div>
          <div style={{ paddingTop: "30px" }}>
            <CodeEditor
              value={input}
              onChange={(e: any) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button onClick={onClick}>Submit</button>
        </div>
      </div>
      <div className='iframe'>
      <iframe
        ref={iFrame}
        srcDoc={html}
        title="code preview"
        sandbox="allow-scripts"
      />
      </div>
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)
