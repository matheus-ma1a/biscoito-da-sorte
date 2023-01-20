import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function getMessage(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

  getMessage()

  return (
    <div className="App">
      <div className="main">
        <p className="textmain">sorte do dia</p>
        <button><img src="/icons8-dice-50.png" alt="" /></button>
      </div>
    </div>
  )
}

export default App
