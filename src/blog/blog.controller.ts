import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
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

  // get all blog by user loged in /blog/user-name/
  @Get('allblog')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  async getAllBlogByUserLogin(@Req() req: Request) {
    return this.blogService.getAllBlogByUserLogin(req);
  }

  // get all blog by user but publicly
  // blog/user/{email}
  @Get('user/:email')
  async getAllBlogByEmail(@Param('email') email: string) {
    return this.blogService.getAllBlogByEmail(email);
  }

  // get blog by post id
  // blog/post
  @Get('post/:post_id')
  async getBlogById(@Param('post_id') post_id: number) {
    return this.blogService.getBlogById(post_id);
  }
}
