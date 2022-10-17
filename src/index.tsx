import { useEffect, useRef, useState } from "react"
import * as esbuild from "esbuild-wasm"
import { createRoot } from "react-dom/client"
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin"
import { fetchPlugin } from "./plugins/fetch-plugin"
import Footer from "./components/Footer/Footer"
import CodeEditor from "./components/CodeEditor/CodeEditor"
import Header from "./components/Header/Header"

import "bulmaswatch/nuclear/bulmaswatch.min.css"
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
      `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [state, setState] = React.useState('Hi There')
  return (
    <div>
      <div style={{ color: 'yellow' }}>{state}</div>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
    )
  }

  const consoleSnippet = () => {
    setInput(`// Normal Styling
console.log("%c Hi There", "background: white; color: red");

// We riot
console.log('つ ◕＿◕ ༽つ we riot!')

// We riot Color
console.log("%c つ ◕＿◕ ༽つ let's go", "background: deeppink; color: yellow");
`)
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
          <button
            className="button button-submit is-primary"
            onClick={onClick}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="iframe">
        <iframe
          ref={iFrame}
          srcDoc={html}
          title="code preview"
          sandbox="allow-scripts"
        />
      </div>
      <Footer />
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)
