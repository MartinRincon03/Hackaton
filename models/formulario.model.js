import { DataTypes, Sequelize } from "sequelize";

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
      primaryKey: true,
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
    media: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

(async () => {
  try {
    await sequelize.sync();
    console.log("¡Tabla y columnas creadas correctamente!");
  } catch (error) {
    console.error("Error al crear la tabla y columnas:", error);
  }
})();

export default Formulario;
