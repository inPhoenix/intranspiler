import React from "react"
import { ResizableBox, ResizableBoxProps } from "react-resizable"
import "./Resizable.scss"

interface ResizableProps {
  direction?: "horizontal" | "vertical"
  children?: React.ReactNode
}

const Resizable = ({ direction, children }: ResizableProps) => {
  let resizableProps: ResizableBoxProps

  if (direction === "horizontal") {
    resizableProps = {
      className: 'resize-horizontal',
      // maxConstraints: [window.innerWidth * 0.2, Infinity],
      //minConstraints: [window.innerWidth * 0.75, Infinity],
      height: Infinity,
      //width: window.innerWidth * 0.75,
      width: 500,
      resizeHandles: ["e"],
    }
  } else {
    resizableProps = {
      maxConstraints: [Infinity, window.innerHeight * 0.8],
      minConstraints: [Infinity, 24],
      resizeHandles: ["s"],
      height: 400,
      width: Infinity,
    }
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>
}

export default Resizable
