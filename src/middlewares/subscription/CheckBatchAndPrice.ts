import { Request, Response, NextFunction } from 'express';
import {prisma } from '../../app';
import { Batch, Subscription } from '@prisma/client';
import ApiError from '../../error/ApiError';

const CheckBatch = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { batchId } = req.body;
    console.log('Batch Id', batchId);
    if (!batchId) next(ApiError.badRequest('Batch Id Required'));

    const batch = await prisma.batch.findUnique({
        where: {
            id: batchId,
        },
    });
    console.log('Batch', batch);
    const { maxCapacity, currentCapacity, price  } = batch as Batch;
    if (currentCapacity + 1 > maxCapacity) {
        next(ApiError.badRequest('Batch is full'));
    }

    // Set price that is fetched from batch details
    req.body['price'] = price;

    next();
};

export default CheckBatch;
