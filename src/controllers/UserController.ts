import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";
import { User } from "../Types/UserInterface";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData: User = req.body;
    const user = await prisma.user
}