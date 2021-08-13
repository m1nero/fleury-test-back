import { Ficha } from 'src/ficha/entities/ficha.entity';
import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({name: 'fi_cdtb_item_sub_item_ficha_item'})
export class Item {
  @OneToOne((type) => Ficha, (ficha) => ficha.ID_UNID_CD_UNIDADE_FICHA, { primary: true })
  @JoinColumn({ name: 'ID_UNID_CD_UNIDADE_FICHA' })
  ID_UNID_CD_UNIDADE_FICHA: Ficha;

  @OneToOne((type) => Ficha, (ficha) => ficha.ID_FICH_NR_FICHA, { primary: true })
  @JoinColumn({ name: 'ID_FICH_NR_FICHA' })
  ID_FICH_NR_FICHA: Ficha;

  @PrimaryColumn()
  ID_ITEM_NR_ITEM: number;

  @PrimaryColumn()
  ID_ITEM_NR_SUBITEM: number;

  @PrimaryColumn({length: 20})
  PROD_SL_EXAME: string;
}