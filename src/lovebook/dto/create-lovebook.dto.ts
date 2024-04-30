import { Category } from "src/lovebook/schema/lovebook.schema"



export class CreateLovebookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}