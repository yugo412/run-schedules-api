import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: '/home/yugo/Projects/schedules.run/database/database.sqlite',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
