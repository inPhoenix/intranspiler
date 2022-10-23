import React, { useEffect, useState } from "react"
import { ResizableBox, ResizableBoxProps } from "react-resizable"
import "./Resizable.scss"

interface ResizableProps {
  direction?: "horizontal" | "vertical"
  children?: React.ReactNode
}

const Resizable = ({ direction, children }: ResizableProps) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    const listener = () => {
      setInnerHeight(window.innerHeight)
      setInnerWidth(window.innerWidth)
    }
    window.addEventListener("resize", listener)
    return () => {
      window.removeEventListener("resize", listener)
    }
  }, [])
  let resizableProps: ResizableBoxProps

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      width: innerWidth * 0.75,
      height: Infinity,
      resizeHandles: ["e"],
    }
  } else {
    resizableProps = {
      maxConstraints: [Infinity, innerHeight * 0.8],
      minConstraints: [Infinity, 24],
      resizeHandles: ["s"],
      height: 400,
      width: Infinity,
    }
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>
}

export default Resizable
