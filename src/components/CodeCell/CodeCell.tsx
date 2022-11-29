import { useState } from "react"
import Footer from "../Footer/Footer"
import CodeEditor from "../CodeEditor/CodeEditor"
import bundle from "../../blundler"
import Resizable from "../Resizable/Resizable"
import Header from "../Header/Header"
import Preview from "../Preview/Preview"
import ReactSnippet from "../Snippets/ReactSnippet"
import ConsoleSnippet from "../Snippets/ConsoleSnippet"

interface CodeCellProps {
  remoteInput?: any
  setRemoteInput?: any
}

const CodeCell = ({ remoteInput, setRemoteInput }: CodeCellProps) => {
  const [code, setCode] = useState("")

  const onClick = async () => {
    const output = await bundle(remoteInput)
    setCode(output)
  }

  const snippetReact = () => {
    setRemoteInput(ReactSnippet)
  }

  const consoleSnippet = () => {
    setRemoteInput(ConsoleSnippet)
  }

  return (
    <div className="mainWrapper">
      <Header snippetReact={snippetReact} consoleSnippet={consoleSnippet} />
      <Resizable off={true}>
        <div style={{ display: "flex", height: "100%", flexDirection: "row" }}>
          <Resizable direction="horizontal">
            <CodeEditor
              handleClick={onClick}
              initialValue={remoteInput}
              onChange={(value) => setRemoteInput(value)}
            />
          </Resizable>
          <Preview code={code} />
        </div>
      </Resizable>
    </div>
  )
}

export default CodeCell
