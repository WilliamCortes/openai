import { Test, TestingModule } from '@nestjs/testing';
import { EnoughController } from './enough.controller';

describe('EnoughController', () => {
  let controller: EnoughController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnoughController],
    }).compile();

    controller = module.get<EnoughController>(EnoughController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
