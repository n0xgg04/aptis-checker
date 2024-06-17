import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TelegramServiceService} from "./telegram-service.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TelegramServiceService],
})
export class AppModule {}
