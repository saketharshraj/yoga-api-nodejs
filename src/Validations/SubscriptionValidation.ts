import { Subscription } from "@prisma/client";
import { Request, Response, NextFunction } from "express"
import ApiError from "../error/ApiError";

const SubscriptionValidation = (req: Request, res: Response, next:NextFunction) => {
    const subscriptionData: Subscription = req.body;
    
    const { price } = subscriptionData;

    // price check
    if (price != 500) {
        next(ApiError.badRequest(`Amount to pay is 500 rupee. You are trying to pay ${price} rupee`));
        return;
    }
}

export default SubscriptionValidation;
