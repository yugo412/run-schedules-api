import { Module } from '@nestjs/common';
import { scheduleProviders } from './schedule.provider';
import { ScheduleService } from './schedule.service';
import { DatabaseModule } from 'src/database.module';
import { ScheduleController } from './schedule.controller';
import { MediaModule } from 'src/media/media.module';

@Module({
  imports: [DatabaseModule, MediaModule],
  providers: [...scheduleProviders, ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
