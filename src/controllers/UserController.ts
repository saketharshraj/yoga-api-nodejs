import { Request, Response, NextFunction } from "express";
import { prisma } from '../app';
import { User } from "@prisma/client";
import ApiError from "../error/ApiError";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const userData: User = req.body;
    const user = await prisma.user.create({
        data: userData
    })
    res.json(user);
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
    if (!user) {
        next(ApiError.notFound(`No user found with id : ${id}`));
        return;
    }
    res.json(user);
}

export const getAllUser = async(req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany();
    res.json(users);
} 

export const updateUser = async(req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const updatedUserData = req.body;
    const user = await prisma.user.update({
        where: {
            id
        },
        data: updatedUserData,
    })
    res.json({
        message: 'User updated successfully',
        user: user,
    });
}

export const deleteUser = async(req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const user = await prisma.user.delete({
        where: {
            id
        }
    })
    res.json({
        message: 'User deleted successfully',
        user: user
    })
}