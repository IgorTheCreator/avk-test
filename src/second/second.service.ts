import { Injectable } from '@nestjs/common';
import { FirstService } from 'src/first/first.service';

@Injectable()
export class SecondService {
  constructor(private readonly firstService: FirstService) {}

  getSum(): number {
    return this.firstService.sum();
  }
}
