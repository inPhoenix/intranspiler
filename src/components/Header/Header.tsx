import * as S from "./styles"
import { useState } from "react"

interface HeaderProps {
  snippetReact: () => void
  consoleSnippet: () => void
}

const Header = ({ snippetReact, consoleSnippet }: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const setActive = () => {
    setOpen(!open)
  }

  const menuClass = open ? "navbar-menu is-active" : "navbar-menu"
  return (
    <nav className="navbar is-primary">
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        onClick={setActive}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div className={menuClass}>
        <div className="navbar-start">
          <div className="field is-grouped">
            <button
              className="button button-format is-primary is-small is-inverted"
              onClick={() => {
                snippetReact()
                setActive()
              }}
            >
              React snippet
            </button>
            <button
              className="button button-format is-primary is-small is-inverted"
              onClick={() => {
                consoleSnippet()
                setActive()
              }}
            >
              Console snippet
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              <S.Text>about</S.Text>
            </div>
            <div className="navbar-dropdown">
              <div className="navbar-item">
                <S.Text>
                  <a href="https://github.com/inPhoenix">GitHub</a>
                </S.Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
