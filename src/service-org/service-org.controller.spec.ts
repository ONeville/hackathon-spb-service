import { Test, TestingModule } from '@nestjs/testing';
import { ServiceOrgController } from './service-org.controller';
import { ServiceOrgService } from './service-org.service';

describe('ServiceOrgController', () => {
  let controller: ServiceOrgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceOrgController],
      providers: [ServiceOrgService],
    }).compile();

    controller = module.get<ServiceOrgController>(ServiceOrgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
