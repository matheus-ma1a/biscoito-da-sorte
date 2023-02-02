import { useEffect, useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'


function App() {

  const [message, setmessage] = useState()
  const [load, setLoad] = useState()
  const [isOpen, setIsOpen ] = useState(false)


  
  const handleButton = ()=>{
    
    let validate = isOpen 

    validate = !validate

    setIsOpen(validate)
    if(validate){
      getMessage()
      
    }else{
      setmessage('')
    }
 }


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

        <div className="label">

          <motion.img
            animate={{x: isOpen? -300 : 0 }}
            className='biscoito Left' src="/biscoitoLeftAtivo 2.svg" alt="" />

          <motion.img 
            animate={{x: isOpen? 300 : 0}}
            className='biscoito Right' src="/biscoitoRightAtivo 1.svg" alt="" />

        </div>

        <p className="textmain">{ load ? 'Caregando sua sorte...' : message}</p>
        <motion.button
          disabled={load && true} 
          onClick={handleButton}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          Abra seu biscoito da sorte

        </motion.button>
      </div>
    </motion.div>
  )
}

export default App