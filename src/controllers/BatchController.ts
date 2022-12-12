import { Request, Response, NextFunction } from "express";
import { prisma } from '../app';
import { Batch } from "@prisma/client";
import ApiError from "../error/ApiError";

export const createBatch = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const batchData: Batch = req.body;
    const batch = await prisma.batch.create({
        data: batchData
    })
    res.json(batch);
}

export const getBatch = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const batch = await prisma.batch.findUnique({
        where: {
            id
        }
    })
    if (!batch) {
        next(ApiError.badRequest(`No batch found with id : ${id}`));
        return;
    }
    res.json(batch);
}

export const getAllBatch = async(req: Request, res: Response, next: NextFunction) => {
    const batch = await prisma.batch.findMany();
    res.json(batch);
}

export const updateBatch = async(req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const updatedBatchData = req.body;
    const batch = await prisma.batch.update({
        where: {
            id
        },
        data: updatedBatchData,
    })
    res.json({
        message: 'Batch updated successfully',
        batch: batch,
    });
}

export const deleteBatch = async(req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const batch = await prisma.batch.delete({
        where: {
            id
        }
    })
    res.json({
        message: 'Batch deleted successfully',
        batch: batch
    })
}

