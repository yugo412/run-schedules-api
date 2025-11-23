import { DataSource } from 'typeorm';
import { Schedule } from './schedule.entity';
import {
  DATA_SOURCE,
  REPOSITORY,
} from 'src/common/constant/repository.constant';

export const scheduleProviders = [
  {
    provide: REPOSITORY.SCHEDULE,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Schedule),
    inject: [DATA_SOURCE],
  },
];
