import { useState } from 'react'
import './App.css'

function App() {
  
  const [message, setmessage] = useState()
  const [load, setLoad] = useState()

  function getMessage(){
    setLoad(true)
     
    fetch('http://localhost:3000',{
      method: "post",
    })
    .then((response) => response.json())
    .then((json) => {
      setLoad(false)
      setmessage(json.result)
    });

  }



  return (
    <div className="App">
      <div className="main">
        <p className="textmain">{load ? 'loading...' : message}</p>
        <button onClick={getMessage} ><img src="/icons8-dice-50.png" alt="" /></button>
      </div>
    </div>
  )
}

export default App
 