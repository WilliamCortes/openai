import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(process.env.HOST));
}
main();
