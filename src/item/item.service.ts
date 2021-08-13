import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientePessoa } from 'src/cliente-pessoa/entities/cliente-pessoa.entity';
import { Ficha } from 'src/ficha/entities/ficha.entity';
import { Pessoa } from 'src/pessoa/entities/pessoa.entity';
import { Unidade } from 'src/unidade/entities/unidade.entity';
import { getConnection } from 'typeorm';
import { Item } from './entities/item.entity';
import { ItemRepository } from './item.repository';
@Injectable()
export class ItemService {

  constructor(
    @InjectRepository(Item)
    private itemRepository: ItemRepository,
  ) { }

  findAll() {
    return this.itemRepository.find();
  }

  findOne(id: number) {
    return this.itemRepository.findOne(id);
  }

  remove(id: number) {
    return this.itemRepository.delete(id);
  }

  async findAllRegistros() {
    const result = await getConnection()
      .createQueryBuilder()
      .select(
        'fi_cdtb_item_sub_item_ficha_item.*, cp_cdtb_unidade_unid.UNID_NO_UNIDADE, fi_cdtb_ficha_fich.FICH_DH_ABERTURA, pe_cdtb_pessoa_fisica_pefi.PEFI_NO_NOME, pe_cdtb_pessoa_fisica_pefi.PEFI_NO_SOBRENOME, pe_cdtb_pessoa_fisica_pefi.PEFI_DH_NASCIMENTO' 
      )
      .from(Item, 'fi_cdtb_item_sub_item_ficha_item')
      .innerJoin(Unidade, 'cp_cdtb_unidade_unid', 'fi_cdtb_item_sub_item_ficha_item.ID_UNID_CD_UNIDADE_FICHA = cp_cdtb_unidade_unid.ID_UNID_CD_UNIDADE')
      .innerJoin(Ficha, 'fi_cdtb_ficha_fich', 'fi_cdtb_item_sub_item_ficha_item.ID_FICH_NR_FICHA = fi_cdtb_ficha_fich.ID_FICH_NR_FICHA')
      .innerJoin(ClientePessoa, 'pe_cdtb_cliente_clie', 'fi_cdtb_ficha_fich.ID_CLIE_NR_CLIENTE = pe_cdtb_cliente_clie.ID_CLIE_NR_CLIENTE')
      .innerJoin(Pessoa, 'pe_cdtb_pessoa_fisica_pefi', 'pe_cdtb_cliente_clie.ID_PEFI_CD_PESSOA_FISICA = pe_cdtb_pessoa_fisica_pefi.ID_PEFI_CD_PESSOA_FISICA')
    return result.getRawMany();
  }
}