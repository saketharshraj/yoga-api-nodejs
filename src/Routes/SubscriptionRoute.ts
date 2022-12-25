import { Router } from "express";
import AddBatchToUser from "../middlewares/subscription/CheckBatchAndPrice";
import * as SubscriptionController from '../controllers/SubscriptionController';
import SubscriptionValidation from "../Validations/SubscriptionValidation";
import MakePayment from "../middlewares/subscription/MakePayment";

const router: Router = Router();

// create subscription
router.post('/', [AddBatchToUser, MakePayment] , SubscriptionController.createSubscription);

// get all subscription
router.get('/', SubscriptionController.getAllSubscription);

// get subscription
router.get('/:id', SubscriptionController.getSubscription);

// patch subscription
router.patch('/:id', SubscriptionController.updateSubscription);

// delete subscription
router.delete('/:id', SubscriptionController.deleteSubscription);

export default router;