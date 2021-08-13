import { Ficha } from './entities/ficha.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Ficha)
export class FichaRepository extends Repository<Ficha> {

}
