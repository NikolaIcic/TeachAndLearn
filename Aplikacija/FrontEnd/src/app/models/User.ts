import { Group } from './Group'

export class User{
    userId?: number;
    firstName: string = '';
    lastName: string = '';
    email:string = '';
    gender:string = 'Male';
    dateOfBirth?:string = '';
    faculty?: string = '';
    role: string = 'Student';
    description?: string = ''; 
    password:string = '';
    groups?: Group[] = [];
    subject?: string = '';
    rating : number = 0;
    ratingCount : number = 0;
    constructor() { }
}