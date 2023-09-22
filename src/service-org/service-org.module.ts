import { Module } from '@nestjs/common';
import { ServiceOrgService } from './service-org.service';
import { ServiceOrgController } from './service-org.controller';

@Module({
  controllers: [ServiceOrgController],
  providers: [ServiceOrgService],
})
export class ServiceOrgModule {}
