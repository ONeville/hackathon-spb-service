import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ExcetData, AppUtils } from '..';

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

    mapData(data: ExcetData[]) {
        const cabins = data.map((d, i) => ({
            id: Date.now() + '-' + Math.round(Math.random() * 1e9) + i + 1,
            cabinId: d.Cabin,
            location: 'CA-' + AppUtils.generateRandomWord(5),
            site: 'AD-Philadelphia-' + AppUtils.generateRandomNumber(1, i + 1),
            city: 'Philadelphia',
            zipCode: 210321,
        }));

        const users = data.map((d, i) => ({
            firstName: d.FirstName,
            lastName: d.LastName,
            dob: AppUtils.generateRandomDOB(23, 65),
            phone: d.Phone,
            id: Math.round(Math.random() * 1e9) + i + 1,
        }));

        // const organizations = data
        //     .filter((d) => d.MHprovider || d.SUDProvider)
        //     .map((d) => ({
        //         name: '',
        //         fullAddress: '',
        //         contact: '',
        //         phone: '',
        //         serviceType: '',
        //     }));

        return { cabins, users };
    }
}
