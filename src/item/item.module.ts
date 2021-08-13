import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemService } from "./item.service";
import { ItemController } from './item.controller';
import { ItemRepository } from './item.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}