const Algo1 = `import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const array = [
    { name: 'facebook', icon: 'facebook' },
    { name: 'cyberpunk', icon: 'cyber' },
  ]
  const test = { name: 'wechat', icon: 'wechat' }
  const newArray = [...array, test]

  return (
    <div>
      {newArray.map((social) => {
        return <div>{social.name}</div>
      })}
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
      `
export default Algo1
