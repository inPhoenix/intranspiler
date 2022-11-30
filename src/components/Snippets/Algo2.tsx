const Algo2 = `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const renderFizzBuss = (n) => {
    for (let i = 1; i <= n; i++) {
      console.log(i)
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzBuzz')
        // return <div> fizzBuzz </div>
      } else if (i % 3 === 0) {
        console.log('fizz')
        // return <div> fizz</div>
      } else if (i % 5 === 0) {
        console.log('buzz')
        // return <div> buzz </div>
      }
      //
    }
  }

  return <div>{renderFizzBuss(100)}</div>
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default Algo2
