import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientePessoaService } from "./cliente-pessoa.service";
import { ClientePessoaController } from './cliente-pessoa.controller';
import { ClientePessoaRepository } from './cliente-pessoa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ClientePessoaRepository])],
  controllers: [ClientePessoaController],
  providers: [ClientePessoaService],
})
export class ClientePessoaModule {}