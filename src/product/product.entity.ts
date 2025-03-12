import { IsNotEmpty, IsNumber, IsPositive, Length, MinLength } from 'class-validator';

export default class Product {
    id?: number;
    
    @IsNotEmpty({ message: '• O nome do produto é obrigatório.\n' })
    @Length(5, 50, { message: '• O nome do produto precisa ter entre 5 e 50 caracteres.\n' })
    name: string;
    
    @IsPositive({ message: '• O preço do produto precisa ser um número positivo.\n' })
    @IsNotEmpty({ message: '• O preço do produto é obrigatório.\n' })
    price: number;
    
    @IsNotEmpty({ message: '• A descrição do produto é obrigatória.\n' })
    @MinLength(5, { message: '• A descrição do produto precisa ter pelo menos 5 caracteres.\n' })
    description: string;
    
    createdAt: Date;

    updatedAt: Date;
}