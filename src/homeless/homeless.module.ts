import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { HomelessService } from './homeless.service';
import { HomelessController } from './homeless.controller';

@Module({
  imports: [ConfigModule],
  controllers: [HomelessController],
  providers: [HomelessService],
})
export class HomelessModule {}
