import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FichaService } from "./ficha.service";
import { FichaController } from './ficha.controller';
import { FichaRepository } from './ficha.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FichaRepository])],
  controllers: [FichaController],
  providers: [FichaService],
})
export class FichaModule {}