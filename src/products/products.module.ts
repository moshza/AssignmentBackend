import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ReviewsModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
