import { useTransition, animated, config } from "react-spring"
import { Code } from "@emotion-icons/material"

import Algo1 from "../Snippets/Algo1"
import Algo2 from "../Snippets/Algo2"
import Algo3 from "../Snippets/Algo3"
import Algo4 from "../Snippets/Algo4"
import Algo5 from "../Snippets/Algo5"
import Algo6 from "../Snippets/Algo6"

import * as S from "./styles"

const algoMap: any = {
  1: Algo1,
  2: Algo2,
  3: Algo3,
  4: Algo4,
  5: Algo5,
  6: Algo6,
}

interface ICyberHelp {
  handleClick: any
  help: boolean
  setRemoteInput?: any
}

export const CyberHelp = ({
  handleClick,
  help,
  setRemoteInput,
}: ICyberHelp) => {
  const renderAlgo = (n: number, title?: string) => {
    return (
      <button
        id={`${n}`}
        className="button button-execute is-primary is-small is-inverted"
        onClick={() => {
          setRemoteInput(algoMap[n])
          handleClick()
        }}
      >
        {title ? title : `Algorithm ${n}`}
      </button>
    )
  }
  const transitions = useTransition(help, {
    from: {
      opacity: 0,
      transform: "translate3d(-100%,0,0)",
      position: "absolute" as "absolute",
      width: "20%",
      height: "100%",
      top: 0,
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
      position: "absolute" as "absolute",
      zIndex: 4000,
      top: 0,
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-100%,0,0)",
      position: "absolute" as "absolute",
    },
    unique: true,
    config: config.stiff,
  })

  return transitions((styles, item): any => {
    return item ? (
      <animated.div style={styles}>
        <S.Wrapper>
          {renderAlgo(1, "Spread Operator")}
          {renderAlgo(2, "FizzBuzz")}
          {renderAlgo(3, "String Reversal")}
          {renderAlgo(4, "Palindrome")}
          {renderAlgo(5, "Counter")}
          {renderAlgo(6, "React Fizzbuzz")}
        </S.Wrapper>
      </animated.div>
    ) : (
      <S.Closed onClick={handleClick}>
        <S.Text>
          <Code />
        </S.Text>
      </S.Closed>
    )
  })
}

export default CyberHelp
