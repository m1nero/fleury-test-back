import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PessoaService } from "./pessoa.service";
import { PessoaController } from './pessoa.controller';
import { PessoaRepository } from './pessoa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaRepository])],
  controllers: [PessoaController],
  providers: [PessoaService],
})
export class PessoaModule {}