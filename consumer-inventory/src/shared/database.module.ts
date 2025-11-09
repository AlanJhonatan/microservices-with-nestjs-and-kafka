import { Module } from '@nestjs/common';
import { PrismaService } from 'src/repositories/prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
