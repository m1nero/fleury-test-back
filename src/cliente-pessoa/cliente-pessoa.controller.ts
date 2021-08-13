import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { ClientePessoaService } from './cliente-pessoa.service';

@Controller('clientePessoas')
export class ClientePessoaController {
    constructor(
        private readonly clientePessoasService: ClientePessoaService
    ) {}

    @Get()
    findAll() {
        return this.clientePessoasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.clientePessoasService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.clientePessoasService.remove(id);
    }
}