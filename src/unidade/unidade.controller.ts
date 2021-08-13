import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UnidadeService } from './unidade.service';

@Controller('unidade')
export class UnidadeController {
    constructor(
        private readonly unidadeService: UnidadeService
    ) {}

    @Get()
    findAll() {
        return this.unidadeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.unidadeService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.unidadeService.remove(id);
    }
}