import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LovebookModule } from './lovebook/lovebook.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, 
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    LovebookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
