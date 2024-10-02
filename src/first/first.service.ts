import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FirstService {
  constructor(@Inject('FIRST_NUMBER') private firstNumber: number) {}

  getFirstNumber(): number {
    return this.firstNumber;
  }
}
