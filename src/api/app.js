import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from "openai" ;

let chave = process.env.KEY


const configuration = new Configuration({
  apiKey: chave
});

const openai = new OpenAIApi(configuration);


const app = express()
const port = 3000

app.use(cors())
app.post('/', async (req, res) => {
  
  const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: 'me faca um mendagem estilo biscoito da sorte',
  temperature: 0.6,
  max_tokens: 60,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
