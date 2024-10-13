import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Product) private repo: Repository<Product>){}

    create(prod: CreateProductDto){
        const product = this.repo.create(prod);

        return this.repo.save(product);
    }

    findOne(id: number){
        return this.repo.findOneBy({ id });
    }

    findAll() {
        return this.repo.find();
    }

    async update(id: number, attrs: Partial<Product>) {
        const product = await this.findOne(id);
        if(!product) {
            throw new NotFoundException('User not found')
        }
        Object.assign(product, attrs);
        return this.repo.save(product);
    }

    async remove(id: number) {
        const product = await this.findOne(id);
        if(!product) {
            throw new NotFoundException("User not found");
        }

        return this.repo.remove(product);
    }
}
