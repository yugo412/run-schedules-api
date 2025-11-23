import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { mediaProviders } from './media.provider';
import { MediaService } from './media.service';

@Module({
  imports: [DatabaseModule],
  providers: [...mediaProviders, MediaService],
  exports: [MediaService],
})
export class MediaModule {}
