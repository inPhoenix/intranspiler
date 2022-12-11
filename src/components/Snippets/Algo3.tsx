const Algo3 = `import React from 'react'
import ReactDOM from 'react-dom'

// Given a string, return a new string with the reversed order
// Example: apple -> leppa

const App = () => {
  const [state, setState] = React.useState('apple')
  const reverse = () => {
    const arr = state.split('') // owhoo im an array
    const copyArray = [...arr]
    copyArray.reverse()
    const final = copyArray.join('')
    setState(final) 
}

  const handleChange = (e) => {
    setState(e.target.value)
  }

  return (
    <div>
    <input value={state} onChange={handleChange}/>
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
