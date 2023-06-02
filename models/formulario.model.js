import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('reporte_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Formulario = sequelize.define('formulario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente");
    await sequelize.sync();
    console.log("¡Tabla y columnas creadas correctamente!");
  } catch (error) {
    console.error("Error al conectar y sincronizar la base de datos:", error);
  }
})();

export default Formulario;
