import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("reporte_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Formulario = sequelize.define(
  "formulario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    media: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

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
