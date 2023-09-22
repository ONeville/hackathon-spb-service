import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceOrgService } from './service-org.service';
import { CreateServiceOrgDto } from './dto/create-service-org.dto';
import { UpdateServiceOrgDto } from './dto/update-service-org.dto';

@Controller('service-org')
export class ServiceOrgController {
  constructor(private readonly serviceOrgService: ServiceOrgService) {}

  @Post()
  create(@Body() createServiceOrgDto: CreateServiceOrgDto) {
    return this.serviceOrgService.create(createServiceOrgDto);
  }

  @Get()
  findAll() {
    return this.serviceOrgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceOrgService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceOrgDto: UpdateServiceOrgDto) {
    return this.serviceOrgService.update(+id, updateServiceOrgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceOrgService.remove(+id);
  }
}
