import { DynamicModule, Module } from '@nestjs/common';
import { FirstService } from './first.service';

@Module({
  providers: [FirstService],
})
export class FirstModule {
  static forRoot(firstNumber: number): DynamicModule {
    return {
      module: FirstModule,
      providers: [
        {
          provide: 'FIRST_NUMBER',
          useValue: firstNumber,
        },
        FirstService,
      ],
      exports: [FirstService],
    };
  }
}
