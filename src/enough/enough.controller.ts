import { Controller, Get, Query, Res } from '@nestjs/common';
import { EnoughService } from './enough.service';
import { Response } from 'express';

@Controller('enough')
export class EnoughController {
  constructor(private readonly enoughService: EnoughService) {}

  @Get('/posts')
  async getPosts(@Res() res: Response) {
    return res.json(await this.enoughService.getPosts());
  }

  @Get('/post')
  async getPost(
    @Query('id') id: string | null,
    @Query('slug') slug: string | null,
    @Res() res: Response,
  ) {
    if (slug) {
      return res.json(await this.enoughService.getPostBySlug(slug));
    } else if (id) {
      return res.json(await this.enoughService.getPostById(id));
    }
  }
}
