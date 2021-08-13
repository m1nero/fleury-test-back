import { Ficha } from 'src/ficha/entities/ficha.entity';
import { Pessoa } from 'src/pessoa/entities/pessoa.entity';
import { Entity, PrimaryColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity({name: 'pe_cdtb_cliente_clie'})
export class ClientePessoa {
  @PrimaryColumn()
  ID_CLIE_NR_CLIENTE: number;

  @OneToOne((type) => Pessoa, (pessoa) => pessoa.ID_PEFI_CD_PESSOA_FISICA)
  @JoinColumn({ name: 'ID_PEFI_CD_PESSOA_FISICA' })
  ID_PEFI_CD_PESSOA_FISICA: Pessoa;

  @OneToOne((type) => Ficha, (ficha) => Ficha)
  ficha: Ficha;
}