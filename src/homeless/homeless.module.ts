import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { HomelessService } from './homeless.service';
import { HomelessController } from './homeless.controller';
import { ProcessFileService, ProcessDataService } from 'src/core';

@Module({
  imports: [ConfigModule],
  controllers: [HomelessController],
  providers: [HomelessService, ProcessFileService, ProcessDataService],
})
export class HomelessModule {}
