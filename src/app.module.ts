import { Module } from '@nestjs/common';
import { ScheduleModule } from './schedule/schedule.module';
import { ConfigModule } from '@nestjs/config';
import { MediaModule } from './media/media.module';
import appConfig from './app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig],
    }),
    ScheduleModule,
    MediaModule,
  ],
})
export class AppModule {}
