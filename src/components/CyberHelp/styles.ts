import styled from "@emotion/styled"

export const CloseButton = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  background: #240446;
  cursor: pointer;
`

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0c0c01;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const Closed = styled.div`
  cursor: pointer;
  right: 0;
  color: #1f1111;
  background: #100711;
  opacity: 0.8;
`

export const Text = styled.div`
  padding-top: 15px;
  cursor: pointer;
  color: #067915;
  margin-left: 7px;
  margin-right: 7px;
  pointer-events: none;
`
export const InputWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  img {
    width: 40%;
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`
export const FlexContainer =  styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`
