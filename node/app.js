import express from "express";
import cors from "cors"

//import conection from database
import db from "./database/db.js"

//import enrouter
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    db.authenticate()
    console.log("Conexion Exitosa a la DB")
} catch (error) {
    console.log(`El error de coneccion es: ${error}`)
}

// app.get('/', (req, res)=>{
//     res.send('Hola')
// })

app.listen(4000,()=>{
    console.log('Server UP running in http://localhost:4000/')})