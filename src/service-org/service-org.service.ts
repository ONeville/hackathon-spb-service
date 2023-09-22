import { Injectable } from '@nestjs/common';
import { CreateServiceOrgDto } from './dto/create-service-org.dto';
import { UpdateServiceOrgDto } from './dto/update-service-org.dto';

@Injectable()
export class ServiceOrgService {
  create(createServiceOrgDto: CreateServiceOrgDto) {
    return 'This action adds a new serviceOrg';
  }

  findAll() {
    return `This action returns all serviceOrg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceOrg`;
  }

  update(id: number, updateServiceOrgDto: UpdateServiceOrgDto) {
    return `This action updates a #${id} serviceOrg`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceOrg`;
  }
}
