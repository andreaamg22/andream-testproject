import { checkJwt } from '../middleware/jwt';
import { Router } from 'express';
import {UserController} from './../controller/UserController';
import { checkRole } from '../middleware/role';

const router = Router ();

// Get all users
router.get('/',[checkJwt, checkRole(['admin'])],UserController.getAll);

// Get one user
router.get('/:id',[checkJwt, checkRole(['admin'])],UserController.getById);

//Create a new User
router.post('/',[checkJwt],UserController.newUser);

//Edit user

router.patch('/:id',[checkJwt, checkRole(['admin'])],UserController.editUser);

router.delete('/:id',[checkJwt, checkRole(['admin'])],UserController.deleteUser);

export default router;



