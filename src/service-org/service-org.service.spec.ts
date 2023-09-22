import { Test, TestingModule } from '@nestjs/testing';
import { ServiceOrgService } from './service-org.service';

describe('ServiceOrgService', () => {
  let service: ServiceOrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceOrgService],
    }).compile();

    service = module.get<ServiceOrgService>(ServiceOrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
