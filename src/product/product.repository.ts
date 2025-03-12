/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import Product from './product.entity';

@Injectable()
export class ProductRepository {
    constructor(private prismaService: PrismaService) {}

    async getAllProducts() {
        return await this.prismaService.product.findMany();
    }

    async getProductById(id: number) {
        return await this.prismaService.product.findUnique({
            where: {
                id,
            },
        });
    }

    async createProduct(product: Product) {
        return await this.prismaService.product.create({
            data: product as any,
        });
    }

    async updateProduct(product: Product) {
        if (!product.id) {
            throw new NotFoundException('Produto não encontrado');
        }
        return await this.prismaService.product.update({
            where: { id: product.id },
            data: product,
        });
    }


    async deleteProduct(id: number) {
        return await this.prismaService.product.delete({
            where: {
                id,
            },
        });
    }
}
