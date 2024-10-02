import { Module } from '@nestjs/common';
import { FirstModule } from 'src/first/first.module';
import { SecondService } from './second.service';
import { SecondController } from './second.controller';

@Module({
  imports: [FirstModule.forFeature(42)],
  providers: [SecondService],
  controllers: [SecondController],
})
export class SecondModule {}
