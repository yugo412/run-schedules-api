import { DataSource } from 'typeorm';
import { Media } from './media.entity';
import {
  DATA_SOURCE,
  REPOSITORY,
} from 'src/common/constant/repository.constant';

export const mediaProviders = [
  {
    provide: REPOSITORY.MEDIA,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Media),
    inject: [DATA_SOURCE],
  },
];
