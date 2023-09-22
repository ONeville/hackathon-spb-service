import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import * as XLSX from 'xlsx';

@Injectable()
export class ProcessFileService {
    private readonly s3 = new S3();

    constructor(private readonly configService: ConfigService) { }

    async getFileData() {
        const params = {
            Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
            Key: 'path-to-your-excel-file.xlsx',
        };

        try {
            const data = await this.s3.getObject(params).promise();

            data.Body
            // Parse the Excel file into an array of objects
            const excelData = this.parseExcel(data.Body);
            return excelData;
        } catch (error) {
            throw new Error('Error reading Excel file from S3');
        }
    }

    parseExcel(buffer: any): any[] {
        const workbook = XLSX.read(buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0]; // Assuming there's only one sheet
        const sheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(sheet);
    }
}
