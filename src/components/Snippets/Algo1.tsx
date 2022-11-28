const Algo1 = `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [state, setState] = React.useState('Algorithm 1')
  return (
    <div>
      Algo 1
      <div style={{ color: 'yellow' }}>{state}</div>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default Algo1
