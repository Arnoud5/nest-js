import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogDto } from './dto';
// import { Request } from 'express';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async createBlog(dto: BlogDto, req: any) {
    // console.log(req.user.sub);
    try {
      const user = req.user;
      const blog = await this.prisma.blog.create({
        data: {
          title: dto.title,
          description: dto.description,
          userId: user.sub,
        },
      });
      return blog;
    } catch (error) {
      throw error;
    }
  }
}
