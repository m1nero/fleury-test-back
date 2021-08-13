import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unidade } from './entities/unidade.entity';
import { UnidadeRepository } from './unidade.repository';
@Injectable()
export class UnidadeService {

  constructor(
      @InjectRepository(Unidade)
      private unidadeRepository: UnidadeRepository,
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