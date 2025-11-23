import { Controller, Get, Param, Query } from '@nestjs/common';
import { ScheduleException } from './schedule.exception';
import { ScheduleService } from './schedule.service';

@Controller('events')
export class ScheduleController {
  constructor(private readonly service: ScheduleService) {}

  @Get()
  getIndex(): string {
    return 'Read more at the documentation';
  }

  @Get('/search')
  getSearch(@Query('q') keyword: string): string {
    return this.service.getSearch(keyword);
  }

  @Get('/:slug')
  async getDetail(@Param('slug') slug: string) {
    const schedule = await this.service.getDetail(slug);

    if (!schedule) {
      throw new ScheduleException('Schedule not found.');
    }

    return schedule;
  }
}
