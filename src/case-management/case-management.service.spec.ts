import { Test, TestingModule } from '@nestjs/testing';
import { CaseManagementService } from './case-management.service';

describe('CaseManagementService', () => {
  let service: CaseManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaseManagementService],
    }).compile();

    service = module.get<CaseManagementService>(CaseManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
