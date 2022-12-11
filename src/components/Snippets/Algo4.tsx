const Algo4 = `import React from 'react'
import ReactDOM from 'react-dom'

// Given a string, check if it is a palindrome
// Example: abba = true

const App = () => {
  const [state, setState] = React.useState('abba')
  const [isPalindrome, setPalindrome] = React.useState('false')
  const palindrome = () => {
    const copyArr = state.split('').reverse() // split returns a new array
    const isReverse = copyArr.join('') === state
    setPalindrome(isReverse ? 'true' : 'false') 
}

  const handleChange = (e) => {
    setState(e.target.value)
  }

  return (
    <div>
    <input value={state} onChange={handleChange}/>
     <button onClick={palindrome}>Palindrome</button>
     <div>
     Is {state} Palindrome?: {isPalindrome}
     </div>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default Algo4
