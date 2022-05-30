import { IsNumber } from 'class-validator';

export class ListAllEntities {
  @IsNumber()
  limit: number;
}
