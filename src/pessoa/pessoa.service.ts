import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { PessoaRepository } from './pessoa.repository';
@Injectable()
export class PessoaService {

  constructor(
      @InjectRepository(Pessoa)
      private pessoaRepository: PessoaRepository,
  ) { }

  findAll() {
    return this.pessoaRepository.find();
  }

  findOne(id: number) {
    return this.pessoaRepository.findOne(id);
  }

  remove(id: number) {
    return this.pessoaRepository.delete(id);
  }
}