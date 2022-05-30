import { IsNumber } from 'class-validator';

export class UpdateCatDto {
  name: string;
  @IsNumber()
  age: number;
  breed: string;
}
