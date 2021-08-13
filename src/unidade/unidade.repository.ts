import { Unidade } from './entities/unidade.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Unidade)
export class UnidadeRepository extends Repository<Unidade> {

}
