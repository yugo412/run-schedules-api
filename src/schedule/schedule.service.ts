import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Schedule } from './schedule.entity';
import { MediaService } from 'src/media/media.service';
import { REPOSITORY } from 'src/common/constant/repository.constant';

@Injectable()
export class ScheduleService {
  constructor(
    @Inject(REPOSITORY.SCHEDULE)
    private readonly scheduleRepository: Repository<Schedule>,

    private readonly mediaService: MediaService,
  ) {}

  getSearch(keyword: string): string {
    return 'Search result for: ' + keyword;
  }

  async getDetail(slug: string): Promise<Schedule | null> {
    const schedule = await this.scheduleRepository
      .createQueryBuilder('schedule')
      .leftJoinAndSelect('schedule.city', 'city')
      .leftJoinAndSelect('city.region', 'region')
      .leftJoinAndSelect(
        'schedule.packages',
        'packages',
        'packages.is_hidden = 0',
      )
      .where({ slug })
      .getOne();

    if (schedule) {
      schedule.media = await this.mediaService.getScheduleMedia(schedule.id);
    }

    return schedule;
  }
}
