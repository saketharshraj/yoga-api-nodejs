import { Request, Response, NextFunction } from "express";
import { prisma } from '../app';
import { User } from "@prisma/client";
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData: User = req.body;
    const user = await prisma.user.create({
        data: userData
    })
}