import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cats } from './cats.model';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [SequelizeModule.forFeature([Cats])],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
