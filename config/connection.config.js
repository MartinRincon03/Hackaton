import { Sequelize } from 'sequelize';
import config from './config.js';

const sequelize = new Sequelize(config.development);

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

export default connectToDatabase;
