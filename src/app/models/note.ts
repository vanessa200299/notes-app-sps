import { User } from "./user";

export class Note{
    _id:string;
    title:string;
    content:string;
    created:Date;
    updated:Date;
    user:User = new User;
}