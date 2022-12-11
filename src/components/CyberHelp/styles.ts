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
  transition: padding 0.3s;
  &:hover {
    padding: 5px;
  }
`

export const Text = styled.div`
  padding-top: 15px;
  color: #d90865;
  margin-left: 7px;
  margin-right: 7px;
  pointer-events: none;
`
