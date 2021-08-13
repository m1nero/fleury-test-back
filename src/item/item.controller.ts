import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(
        private readonly itemService: ItemService
    ) {}

    @Get()
    findAll() {
        return this.itemService.findAllRegistros();
    }
}