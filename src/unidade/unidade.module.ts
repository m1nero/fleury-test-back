import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnidadeService } from "./unidade.service";
import { UnidadeController } from './unidade.controller';
import { UnidadeRepository } from './unidade.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UnidadeRepository])],
  controllers: [UnidadeController],
  providers: [UnidadeService],
})
export class UnidadeModule {}