import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './repository/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private PersonRepository: Repository<Person>,
  ) {}

  findAll(): Promise<Person[]> {
    return this.PersonRepository.find();
  }

  findOne(id: string): Promise<Person> {
    return this.PersonRepository.findOne(id);
  }

  async add(person: Person): Promise<void> {
    await this.PersonRepository.save(person);
  }

  async remove(id: string): Promise<void> {
    await this.PersonRepository.delete(id);
  }
}
