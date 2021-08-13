import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Unidade } from './unidade/entities/unidade.entity';
import { UnidadeModule } from './unidade/unidade.module';
import { ClientePessoa } from './cliente-pessoa/entities/cliente-pessoa.entity';
import { ClientePessoaModule } from './cliente-pessoa/cliente-pessoa.module';
import { Ficha } from './ficha/entities/ficha.entity';
import { FichaModule } from './ficha/ficha.module';
import { Pessoa } from './pessoa/entities/pessoa.entity';
import { PessoaModule } from './pessoa/pessoa.module';
import { Item } from './item/entities/item.entity';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      port: 3306,
      password: '',
      database: 'laboratorio',
      logging: process.env.TYPEORM_LOGGING === 'true',
      entities: [
        Unidade,
        ClientePessoa,
        Ficha,
        Pessoa,
        Item
      ],
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
      cli: { migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR },
    }),
    ScheduleModule.forRoot(),
    UnidadeModule,
    ClientePessoaModule,
    FichaModule,
    PessoaModule,
    ItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
