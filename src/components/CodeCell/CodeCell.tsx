import { useState } from "react"
import Footer from "../Footer/Footer"
import CodeEditor from "../CodeEditor/CodeEditor"
import bundle from "../../blundler"
import Header from "../Header/Header"

import Preview from "../Preview/Preview"
import ReactSnippet from "../Snippets/ReactSnippet"
import ConsoleSnippet from "../Snippets/ConsoleSnippet"

const CodeCell = () => {
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

export default CodeCell
