import { Router } from "express";
import * as BatchController from '../controllers/BatchController';

const router: Router = Router();

// create batch
router.post('/', BatchController.createBatch);

// get all batch
router.get('/', BatchController.getAllBatch);

// get batch
router.get('/:id', BatchController.getBatch);

// patch batch
router.patch('/:id', BatchController.updateBatch);

// delete batch
router.delete('/:id', BatchController.deleteBatch);

export default router;

