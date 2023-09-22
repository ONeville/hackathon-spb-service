import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaseManagementService } from './case-management.service';
import { CreateCaseManagementDto } from './dto/create-case-management.dto';
import { UpdateCaseManagementDto } from './dto/update-case-management.dto';

@Controller('case-management')
export class CaseManagementController {
  constructor(private readonly caseManagementService: CaseManagementService) {}

  @Post()
  create(@Body() createCaseManagementDto: CreateCaseManagementDto) {
    return this.caseManagementService.create(createCaseManagementDto);
  }

  @Get()
  findAll() {
    return this.caseManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caseManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseManagementDto: UpdateCaseManagementDto) {
    return this.caseManagementService.update(+id, updateCaseManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseManagementService.remove(+id);
  }
}
