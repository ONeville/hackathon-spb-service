import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceOrgDto } from './create-service-org.dto';

export class UpdateServiceOrgDto extends PartialType(CreateServiceOrgDto) {}
