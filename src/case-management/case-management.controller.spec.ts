import { Test, TestingModule } from '@nestjs/testing';
import { CaseManagementController } from './case-management.controller';
import { CaseManagementService } from './case-management.service';

describe('CaseManagementController', () => {
  let controller: CaseManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseManagementController],
      providers: [CaseManagementService],
    }).compile();

    controller = module.get<CaseManagementController>(CaseManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
