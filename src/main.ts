require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  const options = new DocumentBuilder()
    .setTitle('Teste')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(cors());
  await app.listen(3000);
}
bootstrap();
