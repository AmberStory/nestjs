import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((data) => {
  return data.user;
})