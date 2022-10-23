const ReactSnippet = `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [state, setState] = React.useState('Hi There')
  return (
    <div>
      <div style={{ color: 'yellow' }}>{state}</div>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default ReactSnippet
