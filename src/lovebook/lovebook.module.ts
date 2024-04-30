import { Module } from '@nestjs/common';
import { LovebookService } from './lovebook.service';
import { LovebookController } from './lovebook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LovebookSchema } from './schema/lovebook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Lovebook', schema: LovebookSchema }])],
  providers: [LovebookService],
  controllers: [LovebookController],
})
export class LovebookModule {}
