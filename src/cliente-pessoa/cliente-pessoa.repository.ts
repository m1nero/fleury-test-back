import { ClientePessoa } from './entities/cliente-pessoa.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ClientePessoa)
export class ClientePessoaRepository extends Repository<ClientePessoa> {

}
