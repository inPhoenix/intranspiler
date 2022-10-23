import CodeCell from "./components/CodeCell/CodeCell"
import { createRoot } from "react-dom/client"

import "bulmaswatch/nuclear/bulmaswatch.min.css"
import "./index.scss"

const App = () => {
  return <CodeCell />
}

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)
