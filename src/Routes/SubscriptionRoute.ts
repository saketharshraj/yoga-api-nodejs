import { Router } from "express";
import * as SubscriptionController from '../controllers/SubscriptionController';
import SubscriptionValidation from "../Validations/SubscriptionValidation";

const router: Router = Router();

// create subscription
router.post('/', SubscriptionValidation, SubscriptionController.createSubscription);

// get all subscription
router.get('/', SubscriptionController.getAllSubscription);

// get subscription
router.get('/:id', SubscriptionController.getSubscription);

// patch subscription
router.patch('/:id', SubscriptionController.updateSubscription);

// delete subscription
router.delete('/:id', SubscriptionController.deleteSubscription);

export default router;