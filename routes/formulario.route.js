import express from 'express';
import multer from 'multer';
import formularioController from '../controllers/formulario.controller';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Obtener todos los formularios
router.get('/formularios', formularioController.getAllFormularios);

// Crear un nuevo formulario
router.post('/formularios', upload.single('media'), formularioController.createFormulario);

// Obtener un formulario por su ID
router.get('/formularios/:id', formularioController.getFormularioById);

// Actualizar un formulario
router.put('/formularios/:id', formularioController.updateFormulario);

// Eliminar un formulario
router.delete('/formularios/:id', formularioController.deleteFormulario);

// Buscar formularios por título
router.get('/formularios/search', formularioController.searchFormulariosByTitulo);

export default router;
