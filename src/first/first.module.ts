import { DynamicModule, Global, Module } from '@nestjs/common';
import { FirstService } from './first.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
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
      exports: ['FIRST_NUMBER', FirstService],
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

  static forFeature(secondNumber: number): DynamicModule {
    return {
      module: FirstModule,
      providers: [
        {
          provide: 'SECOND_NUMBER',
          useValue: secondNumber,
        },
        FirstService,
      ],
      exports: ['SECOND_NUMBER', FirstService],
    };
  }

  static forFeatureAsync(): DynamicModule {
    return {
      module: FirstModule,
      imports: [ConfigModule.forRoot()],
      providers: [
        {
          provide: 'SECOND_NUMBER',
          useFactory: async (configService: ConfigService) => {
            return configService.get<number>('SECOND_NUMBER', 10);
          },
          inject: [ConfigService],
        },
        FirstService,
      ],
      exports: ['SECOND_NUMBER', FirstService],
    };
  }
}
