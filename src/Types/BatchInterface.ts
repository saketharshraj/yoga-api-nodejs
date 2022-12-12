import { User } from "./UserInterface";

export interface Batch {
    id: number;
    start_time: Date;
    end_time: Date;
    max_capacity: Date;
    createdAt: Date;
    updatedAt: Date;
    users: Array<User>
}