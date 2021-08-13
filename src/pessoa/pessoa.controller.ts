import { Controller, Get, Param, Delete } from '@nestjs/common';
import { PessoaService } from './pessoa.service';

@Controller('pessoa')
export class PessoaController {
    constructor(
        private readonly pessoaService: PessoaService
    ) {}

    @Get()
    findAll() {
        return this.pessoaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.pessoaService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.pessoaService.remove(id);
    }
}