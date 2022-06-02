import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn('increment')
  id?: string;

  @Column()
  name: string;

  @Column()
  number?: string;
}
