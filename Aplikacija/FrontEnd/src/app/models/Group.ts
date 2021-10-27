import { GroupChat } from "./group-chat";
import { User } from "./User";

export class Group{
    groupID?: number;
    name: string = '';
    subject: string = '';
    privateGroup : boolean = false;
    ownerID : number = -1;
    description: string = '';
    users: User[] = [];
    groupChats: GroupChat[] = [];
    constructor() { }
}