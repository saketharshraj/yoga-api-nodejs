import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express"
import ApiError from "../error/ApiError";

const UserFormValidation = (req: Request, res: Response, next:NextFunction) => {
    const userData: User = req.body;
    
    const { age } = userData;

    // age limit
    if (age < 18 || age > 65) {
        next(ApiError.badRequest('Age limit is between 18 - 65'));
        return;
    }
}

export default UserFormValidation;
