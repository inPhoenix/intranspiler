import React from "react"
import { ResizableBox } from "react-resizable"

interface ResizableProps {
  direction?: "horizontal" | "vertical"
  children?: React.ReactNode
}

const Resizable = ({ direction, children }: ResizableProps) => {
  return <div>{children}</div>
}

export default Resizable
