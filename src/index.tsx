import CodeCell from "./components/CodeCell/CodeCell"
import { createRoot } from "react-dom/client"
import CyberHelp from "./components/CyberHelp/CyberHelp"
import { useState } from "react"

import "bulmaswatch/nuclear/bulmaswatch.min.css"
import "./index.scss"
import Footer from "./components/Footer/Footer"

const App = () => {
  const [help, setHelp] = useState(false)
  const [remoteInput, setRemoteInput] = useState("")

  const handleHelp = () => {
    setHelp(!help)
  }
  return (
    <div className="wrapper">
      <div className="floatContainer">
        <div className="bar">
          <CyberHelp
            setRemoteInput={setRemoteInput}
            handleClick={handleHelp}
            help={help}
          />
        </div>
        <div className="editor">
          <CodeCell remoteInput={remoteInput} setRemoteInput={setRemoteInput} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)
