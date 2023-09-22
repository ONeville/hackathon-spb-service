import { Injectable } from '@nestjs/common';
import { CreateCaseManagementDto } from './dto/create-case-management.dto';
import { UpdateCaseManagementDto } from './dto/update-case-management.dto';

@Injectable()
export class CaseManagementService {
  create(createCaseManagementDto: CreateCaseManagementDto) {
    return 'This action adds a new caseManagement';
  }

  findAll() {
    return `This action returns all caseManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caseManagement`;
  }

  update(id: number, updateCaseManagementDto: UpdateCaseManagementDto) {
    return `This action updates a #${id} caseManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} caseManagement`;
  }
}
