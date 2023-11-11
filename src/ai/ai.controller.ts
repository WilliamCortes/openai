import { Controller, Get, Query, Res } from '@nestjs/common';
import { AiService } from './ai.service';
import { Response } from 'express';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get()
  async getStart(
    @Query('message') message: string,
    @Res() res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    return res.json(await this.aiService.getStart(message));
  }
}
