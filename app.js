import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from './config/connection.config.js';
import formularioRouter from './routes/formulario.route.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta principal del formulario
app.use('/', formularioRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

connectToDatabase();
