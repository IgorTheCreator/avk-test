import { Inject, Injectable, Optional } from '@nestjs/common';

@Injectable()
export class FirstService {
  constructor(
    @Inject('FIRST_NUMBER') @Optional() private firstNumber?: number,
    @Inject('SECOND_NUMBER') @Optional() private secondNumber?: number,
  ) {}

  getFirstNumber(): number {
    return this.firstNumber;
  }

  getSecondNumber(): number {
    return this.secondNumber;
  }

  sum(): number {
    return this.firstNumber + this.secondNumber;
  }
}
