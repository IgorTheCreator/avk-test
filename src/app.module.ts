import { Module } from '@nestjs/common';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';

@Module({
  imports: [FirstModule.forRoot(1), SecondModule],
})
export class AppModule {}
