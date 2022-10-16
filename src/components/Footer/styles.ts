import styled from "@emotion/styled"

export const Wrapper = styled.div`
  height: 10vh;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Tomorrow, sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  a {
    color: white !important;
    &:hover {
      color: green !important;
    }
    cursor: pointer;
  }
`
