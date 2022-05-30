import { IsNumber } from 'class-validator';

export class CreateCatDto {
  name: string;
  @IsNumber()
  age: number;
  breed: string;
}
