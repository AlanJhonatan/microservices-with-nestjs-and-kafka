import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.KAFKA,
  //     options: {
  //       client: {
  //         brokers: ['localhost:9092'],
  //       },
  //       consumer: {
  //         groupId: 'ec-consumer',
  //       },
  //     },
  //   },
  // );

  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
