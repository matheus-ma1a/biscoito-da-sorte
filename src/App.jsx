import { useState } from 'react'
import './App.css'


function App() {

  const [message, setmessage] = useState()
  const [load, setLoad] = useState()

  function getMessage(){
    setLoad(true)
    let url = 'http://localhost:3002/';

    let options = {
      method: 'POST',
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setmessage(json)
        setLoad(false)
      })
      .catch(err => console.error('error:' + err));
  }

  return (
    <div className="App">
      <div className="main">
        <p className="textmain">{ load ? 'loading...' : message}</p>
        <button onClick={getMessage} ><img src="/icons8-dice-50.png" alt="" /></button>
      </div>
    </div>
  )
}

export default App
 