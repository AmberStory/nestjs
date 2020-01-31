import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Render('index')
  @Get()
  index() {
    return {
      arrList: [
        {'title': '苹果'},
        {'title': '香蕉'},
        {'title': '橘子'}
      ],
      name: 'abc',
      age: 20
    };
  }
}
