import { useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'


function App() {

  const [message, setmessage] = useState()
  const [load, setLoad] = useState()
  const [rotate, setRotate] = useState()

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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} 
      className="App">

      <div className="main">
        <p className="textmain">{ load ? 'loading...' : message}</p>
        <motion.button 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          onClick={getMessage}>

          <motion.img 
          onClick={()=>{setRotate(!rotate)}} 
          src="/icons8-dice-50.png" alt=""
          animate={{rotate: rotate? 360 : 0}} />

        </motion.button>
      </div>
    </motion.div>
  )
}

export default App