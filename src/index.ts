import express from 'express';
import cors from 'cors';
import userRouter from './routers/user.router';
import cryptoRouter from './routers/crypto.router';

const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
}

app.use(cors(options));

const PORT = 3000;

app.use('/api/users', userRouter);
app.use('/api/cryptos', cryptoRouter);

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})