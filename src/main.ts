import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.urlencoded({ extended: true }));
  app.enableCors();
  app.use(LoggerMiddleware);
  const PORT = process.env.PORT;
  await app.listen(PORT);
  console.log(`
  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  Booop Moment Server 服务已启动：http://localhost:${PORT}
  当前环境：${process.env.NODE_ENV}
  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  `);
}

bootstrap();
