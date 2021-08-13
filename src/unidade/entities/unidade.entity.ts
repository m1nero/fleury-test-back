import { Ficha } from 'src/ficha/entities/ficha.entity';
import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm';

@Entity({name: 'cp_cdtb_unidade_unid'})
export class Unidade {
  @PrimaryColumn()
  ID_UNID_CD_UNIDADE: number;

  @Column({length: 30})
  UNID_NO_UNIDADE: string;

  @OneToOne((type) => Ficha, (ficha) => Ficha)
  ficha: Ficha;
}