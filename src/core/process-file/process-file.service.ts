import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class ProcessFileService {
    private readonly s3 = new S3();

    constructor(private readonly configService: ConfigService) { }

    async getFileData() {
        const params = {
            Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
            Key: 'data-dump.csv',
        };

        try {
            const data = await this.s3.getObject(params).promise();

            // Parse the Excel file into an array of objects
            // const excelData = this.parseExcel(data.Body);
            // return excelData;
            return data.Body;
        } catch (error) {
            throw new Error('Error reading Excel file from S3');
        }
    }
}
