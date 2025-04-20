import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT  = process.env.PORT || 3000; 
dotenv.config();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// Middleware
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.get('/', (_req, res) => {
    res.send({msg: 'Hello World!'});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})