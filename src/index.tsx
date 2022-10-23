import { useState } from "react"
import bundle from "./blundler"
import { createRoot } from "react-dom/client"
import Footer from "./components/Footer/Footer"
import CodeEditor from "./components/CodeEditor/CodeEditor"
import Header from "./components/Header/Header"
import Preview from "./components/Preview/Preview"

import ReactSnippet from "./components/Snippets/ReactSnippet"
import ConsoleSnippet from "./components/Snippets/ConsoleSnippet"

import "bulmaswatch/nuclear/bulmaswatch.min.css"
import "./index.scss"

const App = () => {
  const [input, setInput] = useState("")
  const [code, setCode] = useState("")

  const onClick = async () => {
    const output = await bundle(input)
    setCode(output)
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
