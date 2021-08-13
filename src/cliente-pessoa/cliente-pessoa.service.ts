import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientePessoa} from './entities/cliente-pessoa.entity';
import { ClientePessoaRepository } from './cliente-pessoa.repository';
@Injectable()
export class ClientePessoaService {

  constructor(
      @InjectRepository(ClientePessoa)
      private unidadeRepository: ClientePessoaRepository,
  ) { }

  findAll() {
    return this.unidadeRepository.find();
  }

  findOne(id: number) {
    return this.unidadeRepository.findOne(id);
  }

  remove(id: number) {
    return this.unidadeRepository.delete(id);
  }
}