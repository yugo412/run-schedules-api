import { HttpException, HttpStatus } from '@nestjs/common';

export class ScheduleException extends HttpException {
  constructor(message: string, status: HttpStatus = HttpStatus.NOT_FOUND) {
    super(
      {
        status: 'error',
        message: message,
        data: null,
      },
      status,
    );
  }
}
