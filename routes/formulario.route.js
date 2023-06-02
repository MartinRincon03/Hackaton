import express from 'express';
import formularioController from '../controllers/formulario.controller.js';

const router = express.Router();

// Definir las rutas
router.get('/', formularioController.getAllFormularios);
router.post('/', formularioController.createFormulario);
router.get('/:id', formularioController.getFormularioById);
router.put('/:id', formularioController.updateFormulario);
router.delete('/:id', formularioController.deleteFormulario);
router.get('/search', formularioController.searchFormulariosByTitulo);

export default router;
