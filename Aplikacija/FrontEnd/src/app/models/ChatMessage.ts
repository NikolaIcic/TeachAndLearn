export class ChatMessage{
    chatMessageID? : number;
    senderID : number = -1;
    receiverID : number = -2;
    msgRead : boolean = false;
    message : string = '';
    constructor(){ }
}