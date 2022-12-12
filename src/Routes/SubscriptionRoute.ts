import { Router } from "express";
import * as SubscriptionController from '../controllers/SubscriptionController';

const router: Router = Router();

// create subscription
router.post('/', SubscriptionController.createSubscription);

// get all subscription
router.get('/', SubscriptionController.getAllSubscription);

// get subscription
router.get('/:id', SubscriptionController.getSubscription);

// patch subscription
router.patch('/:id', SubscriptionController.updateSubscription);

export default router;