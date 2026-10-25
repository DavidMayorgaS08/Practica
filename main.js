import express from 'express'
import 'dotenv/config';
import connectDB from './database/cnxmongoose.js'
import cors from 'cors'

const app = express()

app.use(cors(
    {
        origin: '*'
    }
));

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
  connectDB()
})