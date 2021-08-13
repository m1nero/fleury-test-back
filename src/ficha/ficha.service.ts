import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ficha } from './entities/ficha.entity';
import { FichaRepository } from './ficha.repository';
@Injectable()
export class FichaService {

  constructor(
      @InjectRepository(Ficha)
      private fichaRepository: FichaRepository,
  ) { }

  findAll() {
    return this.fichaRepository.find();
  }

  findOne(id: number) {
    return this.fichaRepository.findOne(id);
  }

  remove(id: number) {
    return this.fichaRepository.delete(id);
  }
}