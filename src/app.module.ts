import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomelessModule } from './homeless/homeless.module';
import { ServiceOrgModule } from './service-org/service-org.module';
import { CaseManagementModule } from './case-management/case-management.module';
import { ProcessFileService, ProcessDataService } from 'src/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        AWS_REGION: Joi.string().required(),
        AWS_ACCESS_KEY_ID: Joi.string().required(),
        AWS_SECRET_ACCESS_KEY: Joi.string().required(),
        AWS_PUBLIC_BUCKET_NAME: Joi.string().required(),
      }),
    }),
    HomelessModule, ServiceOrgModule, CaseManagementModule],
  controllers: [AppController],
  providers: [AppService, ProcessFileService, ProcessDataService],
})
export class AppModule {}
