import { Module } from '@nestjs/common';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './repository/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonResolver, PersonService],
})
export class PersonModule {}
