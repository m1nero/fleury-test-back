import { Test, TestingModule } from '@nestjs/testing';
import { ClientePessoaService } from './cliente-pessoa.service';

describe('ClientePessoaService', () => {
  let service: ClientePessoaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientePessoaService],
    }).compile();

    service = module.get<ClientePessoaService>(ClientePessoaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});