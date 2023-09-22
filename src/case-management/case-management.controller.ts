import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaseManagementService } from './case-management.service';
import { CreateCaseManagementDto } from './dto/create-case-management.dto';
import { UpdateCaseManagementDto } from './dto/update-case-management.dto';
import { Case } from 'src/core';

@Controller('case-management')
export class CaseManagementController {
  constructor(private readonly caseManagementService: CaseManagementService) { }

  @Post('add')
  add(@Body() createCaseManagementDto: Case) {
    return this.caseManagementService.addCase(createCaseManagementDto);
  }

  @Get('getCases')
  async getCases() {
    return await this.caseManagementService.getCases();
  }
}
