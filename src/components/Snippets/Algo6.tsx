const Algo5 = `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [state, setState] = React.useState('Algo5')

  return (
    <div>
      {state}
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default Algo5
