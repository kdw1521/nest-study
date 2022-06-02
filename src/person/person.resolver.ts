import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from './repository/person.entity';
import { CreatePersonInput, PersonResponse } from './types/person';

@Resolver('Person')
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query()
  async getAllPerson(): Promise<Person[]> {
    return await this.personService.findAll();
  }

  @Query()
  async getPerson(@Args('id') id: string): Promise<Person> {
    const result = await this.personService.findOne(id);
    if (result) return result;
    return {
      id: 'error',
      name: 'no info',
    };
  }

  @Mutation()
  async addPerson(
    @Args('person') person: CreatePersonInput,
  ): Promise<PersonResponse> {
    try {
      await this.personService.add(person);
      return {
        result: 'success',
        msg: 'add success',
      };
    } catch (err) {
      return {
        result: 'error',
        msg: err,
      };
    }
  }

  @Mutation()
  async removePerson(@Args('id') id: string): Promise<PersonResponse> {
    try {
      await this.personService.remove(id);
      return {
        result: 'success',
        msg: 'removed success',
      };
    } catch (err) {
      return {
        result: 'error',
        msg: err,
      };
    }
  }
}
