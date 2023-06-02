import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    username: 'root',
    password: '',
    database: 'reporte_db',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  },
  production: { 
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
    logging: false,
  },
};
