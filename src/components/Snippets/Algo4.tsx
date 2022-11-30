const Algo4 = `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [state, setState] = React.useState('Algorithm 4')
  const array = [
    { name: 'facebook', icon: 'facebook' },
    { name: 'cyberpunk', icon: 'cyber' },
  ]
  const test = { name: 'wechat', icon: 'wechat' }
  const novoArray = [...array, test]

  return (
    <div>
      {novoArray.map((social) => {
        return <div>{social.name}</div>
      })}
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default Algo4
