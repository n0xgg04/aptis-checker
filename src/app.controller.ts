import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const result = await this.appService.getResult();
    return {
      message: "Checked",
      result
    }
  }
}
