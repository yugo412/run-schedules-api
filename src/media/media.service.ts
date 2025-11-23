import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Media } from './media.entity';
import { REPOSITORY } from 'src/common/constant/repository.constant';

@Injectable()
export class MediaService {
  constructor(
    @Inject(REPOSITORY.MEDIA)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  async getScheduleMedia(scheduleId: number): Promise<Media | null> {
    return await this.mediaRepository.findOne({
      where: {
        model_type: 'App\\Models\\Event\\Schedule',
        model_id: scheduleId,
      },
      order: { order_column: 'DESC' },
    });
  }
}
