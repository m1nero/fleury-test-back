import { ClientePessoa } from 'src/cliente-pessoa/entities/cliente-pessoa.entity';
import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm';

@Entity({name: 'pe_cdtb_pessoa_fisica_pefi'})
export class Pessoa {
  @PrimaryColumn()
  ID_PEFI_CD_PESSOA_FISICA: number;

  @Column({length: 11})
  PEFI_NR_CPF: string;

  @Column({length: 20})
  PEFI_NR_RG: string;

  @Column({length: 50})
  PEFI_NO_NOME: string;

  @Column({length: 50})
  PEFI_NO_SOBRENOME: string;

  @Column({type: 'datetime'})
  PEFI_DH_NASCIMENTO: string;

  @OneToOne((type) => ClientePessoa, (pessoa) => Pessoa)
  clientePessoa: ClientePessoa;
}