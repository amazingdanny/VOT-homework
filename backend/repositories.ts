
// Create a new Answer record
import { PrismaClient, Prisma, Answer, Post, User } from '@prisma/client';

const prisma = new PrismaClient();

// Answer Repository
class AnswerRepository {
    static async createAnswer(data: Prisma.AnswerCreateInput): Promise<Answer> {
        return prisma.answer.create({ data });
    }

    static async getAnswerById(id: string): Promise<Answer | null> {
        return prisma.answer.findUnique({ where: { id } });
    }

    static async getAllAnswers(): Promise<Answer[]> {
        return prisma.answer.findMany();
    }

    static async updateAnswerById(id: string, data: Prisma.AnswerUpdateInput): Promise<Answer | null> {
        return prisma.answer.update({ where: { id }, data });
    }

    static async deleteAnswerById(id: string): Promise<Answer | null> {
        return prisma.answer.delete({ where: { id } });
    }
}

// Post Repository
class PostRepository {
    static async createPost(data: Prisma.PostCreateInput): Promise<Post> {
        return prisma.post.create({ data });
    }

    static async getPostById(id: string): Promise<Post | null> {
        return prisma.post.findUnique({ where: { id } });
    }

    static async getAllPosts(): Promise<Post[]> {
        return prisma.post.findMany();
    }

    static async updatePostById(id: string, data: Prisma.PostUpdateInput): Promise<Post | null> {
        return prisma.post.update({ where: { id }, data });
    }

    static async deletePostById(id: string): Promise<Post | null> {
        return prisma.post.delete({ where: { id } });
    }
}

// User Repository
class UserRepository {
    static async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return prisma.user.create({ data });
    }

    static async getUserById(id: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { id } });
    }

    static async getAllUsers(): Promise<User[]> {
        return prisma.user.findMany();
    }

    static async updateUserById(id: string, data: Prisma.UserUpdateInput): Promise<User | null> {
        return prisma.user.update({ where: { id }, data });
    }

    static async deleteUserById(id: string): Promise<User | null> {
        return prisma.user.delete({ where: { id } });
    }
}

export {
    AnswerRepository,
    PostRepository,
    UserRepository
};
