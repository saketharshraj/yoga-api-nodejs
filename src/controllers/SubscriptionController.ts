import { Request, Response, NextFunction } from "express";
import { prisma } from '../app';
import { Subscription } from "@prisma/client";
import ApiError from "../error/ApiError";

export const createSubscription = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const subscriptionData: Subscription = req.body;
    const subscription = await prisma.subscription.create({
        data: subscriptionData
    })
    res.json(subscription);
}

export const getSubscription = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const subscription = await prisma.subscription.findUnique({
        where: {
            id
        }
    })
    if (!subscription) {
        next(ApiError.notFound(`No subscription found with id : ${id}`));
        return;
    }
    res.json(subscription);
}

export const getAllSubscription = async(req: Request, res: Response, next: NextFunction) => {
    const subscription = await prisma.subscription.findMany();
    res.json(subscription);
}

export const updateSubscription = async(req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const updatedSubscriptionData = req.body;
    const subscription = await prisma.subscription.update({
        where: {
            id
        },
        data: updatedSubscriptionData,
    })
    res.json({
        message: 'Subscription updated successfully',
        subscription: subscription,
    });
}

export const deleteSubscription = async(req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const subscription = await prisma.subscription.delete({
        where: {
            id
        }
    })
    res.json({
        message: 'Subscription deleted successfully',
        subscription: subscription
    })
}
