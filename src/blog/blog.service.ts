import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogDto } from './dto';
// import { Request } from 'express';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) { }

  async createBlog(dto: BlogDto, req: any) {
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

  async getAllBlogByUserLogin(req: any) {
    try {
      const user = req.user.sub;
      const allBlog = await this.prisma.blog.findMany({
        where: {
          userId: user,
        },
      });
      return allBlog;
    } catch (error) {
      throw error;
    }
  }

  async getAllBlogByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const userId = user.id;
    try {
      const allBlogByEmail = await this.prisma.blog.findMany({
        where: {
          userId: userId,
        },
      });
      return allBlogByEmail;
    } catch (error) {
      throw error;
    }
  }

  async getBlogById(post_id: number) {
    try {
      const blog = await this.prisma.blog.findUnique({
        where: {
          id: Number(post_id),
        },
      });
      return blog;
    } catch (error) {
      throw error;
    }
  }
}
