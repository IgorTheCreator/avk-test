import { DynamicModule, Module } from '@nestjs/common';
import { FirstService } from './first.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

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

  static forRootAsync(): DynamicModule {
    return {
      module: FirstModule,
      imports: [ConfigModule.forRoot()],
      providers: [
        {
          provide: 'FIRST_NUMBER',
          useFactory: async (configService: ConfigService) => {
            return configService.get<number>('FIRST_NUMBER', 10);
          },
          inject: [ConfigService],
        },
        FirstService,
      ],
      exports: ['FIRST_NUMBER', FirstService],
    };
  }
}
