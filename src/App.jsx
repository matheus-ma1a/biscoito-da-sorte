import { useState } from 'react'
import './App.css'

function App() {
  const [message, setmessage] = useState()

  function getMessage(){
     
    fetch('http://localhost:3000',{
      method: "post",
    })
    .then((response) => response.json())
    .then((json) => setmessage(json.result));

    
  }


  return (
    <div className="App">
      <div className="main">
        <p className="textmain">{message}</p>
        <button onClick={getMessage} ><img src="/icons8-dice-50.png" alt="" /></button>
      </div>
    </div>
  )
}

export default App
 