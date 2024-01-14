import { Injectable } from '@nestjs/common';

@Injectable()
// this mean that this class can be injected in another calss
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
