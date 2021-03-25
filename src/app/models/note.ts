import { User } from "./user";

export class Note{
    _id:string;
    title:string;
    content:string;
    created:Date;
    user:User = new User;
}