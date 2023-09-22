import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { HomelessService } from './homeless.service';
import { HomelessController } from './homeless.controller';
import { ProcessFileService } from 'src/core/process-file/process-file.service';
import { ProcessDataService } from 'src/core/process-data/process-data.service';

@Module({
  imports: [ConfigModule],
  controllers: [HomelessController],
  providers: [HomelessService, ProcessFileService, ProcessDataService],
})
export class HomelessModule {}
