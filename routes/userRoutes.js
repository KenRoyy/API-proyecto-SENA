import express from 'express';
import { createUser, deleteUser, updateUser } from "../controllers/usersController.js";

const router = express.Router();

router.post('/register', createUser);

router.delete('/delete/:id', deleteUser);

router.put('/update/:id',updateUser);

export default router;