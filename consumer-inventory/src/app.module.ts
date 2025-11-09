import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { ReservationsModule } from './reservations/reservations.module';
import { DatabaseModule } from './shared/database.module';

@Module({
  imports: [ReservationsModule, ProductsModule],
  controllers: [AppController],
  providers: [DatabaseModule],
})
export class AppModule {}
