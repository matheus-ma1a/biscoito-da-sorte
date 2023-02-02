import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'


function App() {

  const [message, setmessage] = useState()
  const [load, setLoad] = useState()

  function getMessage(){
    setLoad(true)
    let url = 'https://api-biscoito-da-sorte.vercel.app/resposta';

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
        <motion.button 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          onClick={getMessage}
          ><img src="/icons8-dice-50.png" alt="" /></motion.button>
      </div>
    </div>
  )
}

export default App
 