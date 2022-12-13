const Algo3 = `import React from 'react'
import ReactDOM from 'react-dom'

// Given a string, return a new string with the reversed order
// Example: apple -> leppa

const App = () => {
  const [state, setState] = React.useState('apple')
  
  const reverse = () => {
    const copyArray = state.split('') // owhoo im an array copied
    copyArray.reverse()
    const final = copyArray.join('')
    setState(final) 
  }

    return (
    <div>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={reverse}>Reverse</button>
      <div>
        String: {state}
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default Algo3
