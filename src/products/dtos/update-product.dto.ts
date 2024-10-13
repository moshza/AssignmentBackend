import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateProductDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsNumber()
    @IsOptional()
    price: number;

    @IsString()
    @IsOptional()
    category: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    image: string;
}