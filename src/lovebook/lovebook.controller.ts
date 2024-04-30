import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LovebookService } from './lovebook.service';
import { Lovebook } from './schema/lovebook.schema';
import { CreateLovebookDto } from './dto/create-lovebook.dto';
import { UpdateLovebookDto } from './dto/update-lovebook.dto';

@Controller('lovebooks')
export class LovebookController {
    lovebookModel: any;
    constructor(private lovebookService: LovebookService) {}

    @Get()
    async getAllLovebooks(): Promise <Lovebook[]> {
        return this.lovebookService.findAll();
    }

    @Post()
    async createLovebook(
        @Body()
        lovebook: CreateLovebookDto,
    ): Promise <Lovebook> {
        return this.lovebookService.create(lovebook);
    }

    @Get(':id')
    async getLovebook(
        @Param('id')
        id: string,
    ): Promise <Lovebook> {
        return this.lovebookService.findById(id);
    }

    @Put(':id')
    async updateLovebook(
        @Param('id')
        id: string,
        @Body()
        lovebook: UpdateLovebookDto,
    ): Promise <Lovebook> {
        return this.lovebookService.updateById(id, lovebook);
    }

    @Delete(':id')
    async deleteLovebook(
        @Param('id')
        id: string,
    ): Promise <Lovebook> {
        return this.lovebookService.deleteById(id);
    }

}
