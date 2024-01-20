import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  async createBlog(@Body() dto: BlogDto, @Req() req: Request) {
    return this.blogService.createBlog(dto, req);
  }
}
