import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('app');
  app.useStaticAssets('public/img', {
    prefix: '/static/'
  });
  app.useStaticAssets('public/style', {
    prefix: '/static/'
  });
  app.setBaseViewsDir('view');
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
