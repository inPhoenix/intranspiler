import CodeCell from "./components/CodeCell/CodeCell"
import { createRoot } from "react-dom/client"
import CyberHelp from "./components/CyberHelp/CyberHelp"
import { useState } from "react"

import "bulmaswatch/nuclear/bulmaswatch.min.css"
import "./index.scss"

const App = () => {
  const [help, setHelp] = useState(false)
  const [remoteInput, setRemoteInput] = useState("")

  const handleHelp = () => {
    setHelp(!help)
  }
  return (
    <div>
      <div className="wrapper">
        <CyberHelp
          setRemoteInput={setRemoteInput}
          handleClick={handleHelp}
          help={help}
        />
        <CodeCell remoteInput={remoteInput} setRemoteInput={setRemoteInput} />
      </div>
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)
