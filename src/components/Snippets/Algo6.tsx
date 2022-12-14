const Algo6 = `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [state, setState] = React.useState(1)

  const incHandle = () => {
    setState((prevCount) => prevCount + 1)
  }

  const decHandle = () => {
    setState((prevCount) => prevCount - 1)
  }

  const evaluate = (val) => {
    let renderFizzBuzzOrValue = val
    console.log('renderFizzBuzzOrValue', renderFizzBuzzOrValue)
    if (val % 3 === 0) {
      renderFizzBuzzOrValue = 'FIZZ'
    }
    if (val % 5 === 0) {
      renderFizzBuzzOrValue = 'BUZZ'
    }
    if (val % 3 === 0 && val % 5 === 0) {
      renderFizzBuzzOrValue = 'FIZZBUZZ'
    }
    return renderFizzBuzzOrValue
  }

  return (
    <div>
      <div style={{ color: 'yellow' }}>{evaluate(state)}</div>
      <button onClick={incHandle}> INC </button>
      <button onClick={decHandle}> DEC </button>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))`
export default Algo6
