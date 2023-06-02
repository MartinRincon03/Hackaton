import Formulario from "../models/formulario.model.js";
import fs from "fs/promises";
import path from "path";

const formularioController = {
  // Obtener todos los formularios
  getAllFormularios: async (req, res) => {
    try {
      const formularios = await Formulario.findAll();
      res.json(formularios);
    } catch (error) {
      console.error("Error al obtener los formularios:", error);
      res.status(500).json({ error: "Ocurrió un error al obtener los formularios" });
    }
  },

  // Crear un nuevo formulario
  createFormulario: async (req, res) => {
    try {
      const { titulo, descripcion, ubicacion, fecha } = req.body;
      const media = req.file.filename; // Nombre del archivo guardado en el servidor
      const nuevoFormulario = await Formulario.create({
        titulo,
        descripcion,
        ubicacion,
        fecha,
        media,
      });
      res.status(201).json(nuevoFormulario);
    } catch (error) {
      console.error("Error al crear el formulario:", error);
      res.status(500).json({ error: "Ocurrió un error al crear el formulario" });
    }
  },

  // Obtener un formulario por su ID
  getFormularioById: async (req, res) => {
    try {
      const { id } = req.params;
      const formulario = await Formulario.findByPk(id);
      if (formulario) {
        res.json(formulario);
      } else {
        res.status(404).json({ error: "No se encontró el formulario" });
      }
    } catch (error) {
      console.error("Error al obtener el formulario:", error);
      res.status(500).json({ error: "Ocurrió un error al obtener el formulario" });
    }
  },

  // Actualizar un formulario
  updateFormulario: async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, descripcion, ubicacion, fecha } = req.body;
      const formulario = await Formulario.findByPk(id);
      if (formulario) {
        await formulario.update({
          titulo,
          descripcion,
          ubicacion,
          fecha,
        });
        res.json(formulario);
      } else {
        res.status(404).json({ error: "No se encontró el formulario" });
      }
    } catch (error) {
      console.error("Error al actualizar el formulario:", error);
      res.status(500).json({ error: "Ocurrió un error al actualizar el formulario" });
    }
  },

  // Eliminar un formulario
  deleteFormulario: async (req, res) => {
    try {
      const { id } = req.params;
      const formulario = await Formulario.findByPk(id);
      if (formulario) {
        // Eliminar el archivo del servidor
        const mediaPath = path.join(__dirname, "..", "uploads", formulario.media);
        await fs.unlink(mediaPath);

        await formulario.destroy();
        res.json({ message: "Formulario eliminado correctamente" });
      } else {
        res.status(404).json({ error: "No se encontró el formulario" });
      }
    } catch (error) {
      console.error("Error al eliminar el formulario:", error);
      res.status(500).json({ error: "Ocurrió un error al eliminar el formulario" });
    }
  },

  // Buscar formularios por título
  searchFormulariosByTitulo: async (req, res) => {
    try {
      const { titulo } = req.query;
      const formularios = await Formulario.findAll({
        where: {
          titulo: {
            [Op.like]: `%${titulo}%`,
          },
        },
      });
      res.json(formularios);
    } catch (error) {
      console.error("Error al buscar formularios por título:", error);
      res.status(500).json({ error: "Ocurrió un error al buscar formularios por título" });
    }
  },
};

export default formularioController;
