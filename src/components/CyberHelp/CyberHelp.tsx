import { useTransition, animated, config } from "react-spring"

import * as S from "./styles"
import Algo1 from "../Snippets/Algo1"
import Algo2 from "../Snippets/Algo2"
import Algo3 from "../Snippets/Algo3"
import Algo4 from "../Snippets/Algo4"

interface ICyberHelp {
  handleClick: any
  help: boolean
  setRemoteInput?: any
}

const algo3 = Algo3
const algo4 = Algo4

export const CyberHelp = ({
  handleClick,
  help,
  setRemoteInput,
}: ICyberHelp) => {
  let decider = ""
  const renderAlgo = (n: number, title?: string) => {
    switch (n) {
      case 3: {
        decider = algo3
        break
      }
      case 4: {
        decider = algo4
        break
      }
    }
    return (
      <button
        className="button button-execute is-primary is-small is-inverted"
        onClick={() => {
          setRemoteInput(decider)
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
          <S.CloseButton
            onClick={handleClick}
            role="button"
            aria-label="close button"
          >
            Close
          </S.CloseButton>
          <button
            className="button button-execute is-primary is-small is-inverted"
            onClick={() => {
              setRemoteInput(Algo1)
              handleClick()
            }}
          >
            Spread Operator
          </button>
          <button
            className="button button-execute is-primary is-small is-inverted"
            onClick={() => {
              setRemoteInput(Algo2)
              handleClick()
            }}
          >
            FizzBuzz
          </button>
          {renderAlgo(3, "String Reversal")}
          {renderAlgo(4, "Palindrome")}
        </S.Wrapper>
      </animated.div>
    ) : (
      <S.Closed onClick={handleClick}>
        <S.Text>Help</S.Text>
      </S.Closed>
    )
  })
}

export default CyberHelp
