import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getAll() {
    return {
      message: 'hello world !',
    };
  }
}
