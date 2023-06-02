import express from 'express';
import multer from 'multer';
import formularioController from '../controllers/formulario.controller.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Obtener todos los formularios
router.get('/', formularioController.getAllFormularios);

// Crear un nuevo formulario
router.post('/', upload.single('media'), formularioController.createFormulario);

// Obtener un formulario por su ID
router.get('/:id', formularioController.getFormularioById);

// Actualizar un formulario
router.put('/:id', formularioController.updateFormulario);

// Eliminar un formulario
router.delete('/:id', formularioController.deleteFormulario);

// Buscar formularios por título
router.get('/search', formularioController.searchFormulariosByTitulo);

export default router;
