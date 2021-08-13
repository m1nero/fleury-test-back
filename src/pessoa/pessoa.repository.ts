import { Pessoa } from './entities/pessoa.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {

}
