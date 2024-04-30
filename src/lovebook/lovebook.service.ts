import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lovebook } from './schema/lovebook.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class LovebookService {
    constructor(
        @InjectModel(Lovebook.name)
        private lovebookModel: mongoose.Model<Lovebook>
    ) {}

    async findAll(): Promise <Lovebook[]> {
        const lovebooks = await this.lovebookModel.find();
        return lovebooks;
    }

    async create(lovebook: Lovebook): Promise <Lovebook> {
        const res = await this.lovebookModel.create(lovebook);
        return res;
    }

    async findById(id: string): Promise <Lovebook> {
        const lovebook = await this.lovebookModel.findById(id);

        if (!lovebook) {
            throw new NotFoundException('LOVE LOST FOREVER.');
        }
        return lovebook;
    }

    async updateById(id: string, lovebook: Lovebook): Promise<Lovebook> {
        return await this.lovebookModel.findByIdAndUpdate(id, lovebook, {
            new: true,
            runValidators: true,
        });

    }

    async deleteById(id: string): Promise<Lovebook> {
        return await this.lovebookModel.findByIdAndDelete(id);
    }

}
