const Algo5 = `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [state, setState] = React.useState(1)

  const incHandle = () => {
    setState((prevCount) => prevCount + 1)
  }

  const decHandle = () => {
    setState((prevCount) => prevCount - 1)
  }

  return (
    <div>
      <div style={{ color: 'yellow' }}>{state}</div>
      <button onClick={incHandle}> INC </button>
      <button onClick={decHandle}> DEC </button>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))`
export default Algo5
