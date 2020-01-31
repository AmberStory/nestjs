import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getStyle() {
      return ['blue'];
  }
}
