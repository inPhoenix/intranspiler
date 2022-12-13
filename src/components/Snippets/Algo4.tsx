const Algo4 = `import React from 'react'
import ReactDOM from 'react-dom'

// Given a string, check if it is a palindrome
// Example: abba = true

const App = () => {
  const [state, setState] = React.useState('abba')
  const [isPalindrome, setPalindrome] = React.useState('')
 
  const palindrome = () => {
    const copyArr = state.split('').reverse() // split returns a new array
    const isReverse = copyArr.join('') === state
    setPalindrome(isReverse ? 'TRUE' : 'FALSE') 
  }

  return (
    <div>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={palindrome}>Palindrome</button>
      <div>
        Is {state} Palindrome? <div style={{color: 'yellow'}}>{isPalindrome}</div>
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default Algo4
