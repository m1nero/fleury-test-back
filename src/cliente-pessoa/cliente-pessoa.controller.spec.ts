import { Test, TestingModule } from '@nestjs/testing';
import { ClientePessoaController } from './cliente-pessoa.controller';

describe('ClientePessoaController', () => {
  let controller: ClientePessoaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientePessoaController],
    }).compile();

    controller = module.get<ClientePessoaController>(ClientePessoaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});