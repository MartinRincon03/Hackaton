import express from 'express';
import formularioController from '../controllers/formulario.controller.js';

const router = express.Router();

// Rutas para los formularios
router.get('/formularios', formularioController.getAllFormularios);
router.post('/formularios', formularioController.createFormulario);
router.get('/formularios/:id', formularioController.getFormularioById);
router.put('/formularios/:id', formularioController.updateFormulario);
router.delete('/formularios/:id', formularioController.deleteFormulario);
router.get('/formularios/search', formularioController.searchFormulariosByTitulo);

export default router;

