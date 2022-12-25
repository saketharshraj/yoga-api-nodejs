import { Request, Response, NextFunction } from 'express';
import {prisma } from '../../app';
import { Batch, Subscription } from '@prisma/client';
import ApiError from '../../error/ApiError';

const MakePayment = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { price } = req.body;
    if(!price) next(ApiError.internalServerError('Failed to set price'))

    // Make payment here
    // Assume payment gateway is working fine

    // Update batch capacity
    const { batchId } = req.body;
    const batch = await prisma.batch.findUnique({
        where: {
            id: batchId,
        },
    });
    const { currentCapacity } = batch as Batch;
    await prisma.batch.update({
        where: {
            id: batchId,
        },
        data: {
            currentCapacity: currentCapacity + 1,
        },
    });

    // update user with batch Id
    const { userId } = req.body;
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            batchId,
        },
    }).catch(err => {
        console.log('Error', err);
        next(ApiError.internalServerError('Failed to update user with batch Id'))
    })

    req.body['userId'] = userId;

    res.json({message: 'It runs successfully'});
};

export default MakePayment;
