import { Controller, Get, Render, Body, Post, Response, Redirect } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService ) {}
  @Get()
  @Render('index')
  add(@User({user:'abcd'}) user) {
    console.log('user:', user);
    return {
      arrList: [
        {'title': '苹果'},
        {'title': '香蕉'},
        {'title': '橘子'}
      ],
      name: 'Amber',
      age: 20
    }
  }

  @Get('setStyle')
  async setStyle(): Promise<any> {
    return await this.userService.getStyle();
  }

  @Post('getUserInfo')
  // @Redirect('/app/user')
  getUserInfo(@Body() body, @Response() res) {
    console.log(body);
    res.redirect('/app/user');
  }
}
