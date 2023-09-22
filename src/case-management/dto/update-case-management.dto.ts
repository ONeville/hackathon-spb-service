import { PartialType } from '@nestjs/mapped-types';
import { CreateCaseManagementDto } from './create-case-management.dto';

export class UpdateCaseManagementDto extends PartialType(CreateCaseManagementDto) {}
