import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {

    SHILOH = 'DYNASTY',
    LOSING = 'INTEREST',
    MUSIC = 'DEPRESSED',
}

@Schema({
    timestamps: true,
})

export class Lovebook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const LovebookSchema = SchemaFactory.createForClass(Lovebook)