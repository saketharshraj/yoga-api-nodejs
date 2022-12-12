import { Batch } from "./BatchInterface";
import { Subscription } from "./SubscriptionInterface";

export interface User {
    id  : number;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    age: number;
    sex: string;
    address: string;
    phone: string;
    height: number;
    weight: number;
    batch: Batch;
    batchId: number
    subscription: Subscription;
    subscriptionId: number;
    createdAt: Date;
    updatedAt: Date;
}