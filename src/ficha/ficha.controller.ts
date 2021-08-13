import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { FichaService } from './ficha.service';

@Controller('ficha')
export class FichaController {
    constructor(
        private readonly fichaService: FichaService
    ) {}

    @Get()
    findAll() {
        return this.fichaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.fichaService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.fichaService.remove(id);
    }
}