import { Request, Response, NextFunction } from 'express';
import { prisma } from '../app';
import { Subscription } from '@prisma/client';
import ApiError from '../error/ApiError';

export const createSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const subscriptionData: Subscription = req.body;
    await prisma.subscription
        .create({
            data: subscriptionData,
        })
        .then((subscriptionResponse) => {
            res.status(201).json({
                message: 'Subscription created successfully',
                subscription: subscriptionResponse,
            });
        })
        .catch((err) => {
            console.log('Error', err);
            next(ApiError.internalServerError('Some error occured'));
        });
};

export const getSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const id = String(req.params.id);
    const subscription = await prisma.subscription.findUnique({
        where: {
            id,
        },
    });
    if (!subscription) {
        next(ApiError.notFound(`No subscription found with id : ${id}`));
        return;
    }
    res.json(subscription);
};

export const getAllSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const subscription = await prisma.subscription.findMany();
    res.json(subscription);
};

export const updateSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const id = String(req.params.id);
    const updatedSubscriptionData = req.body;
    const subscription = await prisma.subscription
        .update({
            where: {
                id,
            },
            data: updatedSubscriptionData,
        })
        .then((subscriptionResponse) => {
            res.status(201).json({
                message: 'Subscription updated successfully',
                subscription: subscriptionResponse,
            });
        })
        .catch((err) => {
            console.log('Error', err);
            next(ApiError.internalServerError('Some error occured'));
        });
};

export const deleteSubscription = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const id = String(req.params.id);
    await prisma.subscription
        .delete({
            where: {
                id,
            },
        })
        .then((subscriptionResponse) => {
            res.status(201).json({
                message: 'Subscription deleted successfully',
                subscription: subscriptionResponse,
            });
        })
        .catch((err) => {
            console.log('Error', err);
            next(ApiError.internalServerError('Some error occured'));
        });
};
