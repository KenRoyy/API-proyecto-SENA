import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routes
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRouters.js";

dotenv.config()

const app = express()
app.use(express.json())

// bd
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('conectado a mongo'))
    .catch((err) => console.log('Error al conectar: ', err))

// routes
app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)
app.use('/api/order',orderRoutes)

app.use('/', (req,res) => {
    res.send('API funcionando')
})

//listen
const PORT  = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('servidor corriendo')
    console.log(process.env.MONGO_URI)
})