import { useState } from "react"
import Footer from "../Footer/Footer"
import CodeEditor from "../CodeEditor/CodeEditor"
import bundle from "../../blundler"
import Resizable from "../Resizable/Resizable"
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
      <Resizable off={true}>
        <div style={{ display: "flex", height: "100%", flexDirection: "row" }}>
          <Resizable direction="horizontal">
            <CodeEditor
              handleClick={onClick}
              initialValue={input}
              onChange={(value) => setInput(value)}
            />
          </Resizable>
          <Preview code={code} />
        </div>
      </Resizable>
      <Footer />
    </div>
  )
}

export default CodeCell
