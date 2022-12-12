import { Router } from "express";
import * as UserController from '../controllers/UserController';

const router: Router = Router();

// create user
router.post('/', UserController.createUser);

// get all user
router.get('/', UserController.getAllUser);

// get user
router.get('/:id', UserController.getUser);

// patch user
router.patch('/:id', UserController.updateUser);

export default router;
