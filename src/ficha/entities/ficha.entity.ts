import { ClientePessoa } from 'src/cliente-pessoa/entities/cliente-pessoa.entity';
import { Item } from 'src/item/entities/item.entity';
import { Unidade } from 'src/unidade/entities/unidade.entity';
import { Entity, Column, PrimaryColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity({name: 'fi_cdtb_ficha_fich'})
export class Ficha {
  @OneToOne((type) => Unidade, (unidade) => unidade.ID_UNID_CD_UNIDADE, { primary: true })
  @JoinColumn({ name: 'ID_UNID_CD_UNIDADE_FICHA' })
  ID_UNID_CD_UNIDADE_FICHA: Unidade;

  @PrimaryColumn()
  ID_FICH_NR_FICHA: number;

  @OneToOne((type) => ClientePessoa, (clientePessoa) => clientePessoa.ID_CLIE_NR_CLIENTE)
  @JoinColumn({ name: 'ID_CLIE_NR_CLIENTE' })
  ID_CLIE_NR_CLIENTE: ClientePessoa;

  @Column({type: 'datetime'})
  FICH_DH_ABERTURA: string;

  @OneToOne((type) => Item, (item) => Item)
  item: Item;
}