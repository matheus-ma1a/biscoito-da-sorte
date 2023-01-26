import { useState } from 'react'
import './App.css'
import { Configuration, OpenAIApi } from "openai" ;

function App() {

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_KEY
  });
  
  const openai = new OpenAIApi(configuration);
  const [message, setmessage] = useState()
  const [load, setLoad] = useState()

  async function getMessage(){
    setLoad(true)

    await openai.createCompletion({
        model: "text-davinci-003",
        prompt: 'me faca um mendagem estilo biscoito da sorte',
        temperature: 0.6,
        max_tokens: 60,
      }).then(res => {
        setmessage(res.data.choices[0].text)
        setLoad(false)
      } )
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
 