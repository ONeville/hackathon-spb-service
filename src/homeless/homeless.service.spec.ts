import { Test, TestingModule } from '@nestjs/testing';
import { HomelessService } from './homeless.service';

describe('HomelessService', () => {
  let service: HomelessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomelessService],
    }).compile();

    service = module.get<HomelessService>(HomelessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
