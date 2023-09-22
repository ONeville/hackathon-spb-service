import { Module } from '@nestjs/common';
import { CaseManagementService } from './case-management.service';
import { CaseManagementController } from './case-management.controller';
import { ProcessDataService } from 'src/core';

@Module({
  controllers: [CaseManagementController],
  providers: [CaseManagementService, ProcessDataService],
})
export class CaseManagementModule {}
