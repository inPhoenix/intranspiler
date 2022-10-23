import React, { useEffect, useState } from "react"
import { ResizableBox, ResizableBoxProps } from "react-resizable"
import "./Resizable.scss"

interface ResizableProps {
  direction?: "horizontal" | "vertical"
  children?: React.ReactNode
  off?: boolean
}

const Resizable = ({ direction, children, off = false }: ResizableProps) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    let timer: any
    if (timer) {
      clearTimeout(timer)
    }
    const listener = () => {
      setTimeout(() => {
        setInnerHeight(window.innerHeight)
        setInnerWidth(window.innerWidth)
      }, 200)
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
  if (off) {
    return <div className="full-height">{children}</div>
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>
}

export default Resizable
