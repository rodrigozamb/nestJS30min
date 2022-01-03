import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: number = parseInt(`${process.env.PORT}`) || 8000;
  console.log("Listening on port = ",port)
  await app.listen(port);
}
bootstrap();
