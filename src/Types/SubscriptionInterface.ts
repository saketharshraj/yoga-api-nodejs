import { User } from "./UserInterface";

export interface Subscription {
    id: number;
    name: string;
    price: number;
    expiresAt: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    users: Array<User>;
}