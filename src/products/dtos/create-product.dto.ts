import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    title: string;

    @IsNumber()
    price: number;

    @IsString()
    category: string;

    @IsString()
    description: string;

    @IsString()
    image: string;
}