/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Product from './product.entity';
import { ProductRepository } from './product.repository';

@Controller('product')
export class ProductController {
    constructor(private repo: ProductRepository) { }

    @Get()
    async getAllProducts() {
        return await this.repo.getAllProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: string) {
        return await this.repo.getProductById(+id);
    }

    @Post()
    async createProduct(@Body() product: Product) {
        try {
            const novoProduto = await this.repo.createProduct(product) as Product;
            return novoProduto;
        } catch (error) {
            throw new Error(`Falha ao criar produto: ${error.message}`);
        }
    }

    @Put(':id')
    async atualizar(@Param('id') id: string, @Body() product: Product) {
        const produtoAtualizado = await this.repo.updateProduct({
            ...product,
            id: +id,
        });
        return produtoAtualizado;
    }




    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        await this.repo.deleteProduct(+id);
    }
}
