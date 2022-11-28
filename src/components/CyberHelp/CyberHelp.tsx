import { useTransition, animated, config } from "react-spring"

import * as S from "./styles"
import ReactSnippet from "../Snippets/ReactSnippet"
import Algo1 from "../Snippets/Algo1"
import Algo2 from "../Snippets/Algo2"

const cyberPunkGuyOnBuilding =
  process.env.PUBLIC_URL + "/assets/pics/cyberpunk.gif"

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
  const transitions = useTransition(help, {
    from: {
      opacity: 0,
      transform: "translate3d(-100%,0,0)",
      position: "absolute" as "absolute",
      width: "20%",
      height: "100%",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
      position: "absolute" as "absolute",
      zIndex: 4000,
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
            Algorithm 1
          </button>
          <button
            className="button button-execute is-primary is-small is-inverted"
            onClick={() => {
              setRemoteInput(Algo2)
              handleClick()
            }}
          >
            Algorithm 2
          </button>
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
