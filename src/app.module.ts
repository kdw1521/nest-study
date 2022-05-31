import { Module, ValidationPipe } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { APP_PIPE } from '@nestjs/core';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    CatsService,
  ],
})
export class AppModule {}
