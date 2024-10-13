import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ReviewService } from 'src/reviews/reviews.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService, private reviewService: ReviewService) { }

    @Get()
    findAllProducts() {
        return this.productService.findAll();
    }

    @Post()
    createProduct(@Body() body: CreateProductDto) {
        this.productService.create(body);
    }

    @Get('/:id')
    async findProduct(@Param('id') id: string) {
        const product = await this.productService.findOne(parseInt(id));
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        const reviews = await this.reviewService.findByProductId(parseInt(id));

        return {
            product,
            reviews: reviews ? reviews.Reviews : [],
        };
    }

    @Delete('/:id')
    removeProduct(@Param('id') id: string) {
        this.productService.remove(parseInt(id));
    }

    @Put('/:id')
    updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
        this.productService.update(parseInt(id), body);
    }


}
