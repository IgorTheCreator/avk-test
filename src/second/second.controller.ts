import { Controller, Get } from '@nestjs/common';
import { SecondService } from './second.service';

@Controller()
export class SecondController {
  constructor(private readonly secondService: SecondService) {}

  @Get()
  getSecondNumber() {
    return this.secondService.getSum();
  }
}
