import express from 'express';
import { getNotes,getNoteById, createNote, updateNote, deleteNote } from '../controllers/notesController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware); // 👈 protect all note routes

router.get('/',      getNotes);
router.get('/:id',   getNoteById);  
router.post('/',     createNote);
router.put('/:id',   updateNote);
router.delete('/:id', deleteNote);

export default router;