import { Test, TestingModule } from '@nestjs/testing';
import { HomelessController } from './homeless.controller';
import { HomelessService } from './homeless.service';

describe('HomelessController', () => {
  let controller: HomelessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomelessController],
      providers: [HomelessService],
    }).compile();

    controller = module.get<HomelessController>(HomelessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
