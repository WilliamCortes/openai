import { Test, TestingModule } from '@nestjs/testing';
import { EnoughService } from './enough.service';

describe('EnoughService', () => {
  let service: EnoughService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnoughService],
    }).compile();

    service = module.get<EnoughService>(EnoughService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
