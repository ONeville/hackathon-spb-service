import { Injectable } from '@nestjs/common';
import { BatchWriteItemCommandInput, DynamoDB } from '@aws-sdk/client-dynamodb';

@Injectable()
export class ProcessDataService {
    private readonly dynamoDB = new DynamoDB();

    async addOne<T>(tableName: string, record: T): Promise<any> {
        const params = {
            TableName: tableName,
            Item: record as any,
        };

        try {
            const result = await this.dynamoDB.putItem(params);
            return result;
        } catch (error) {
            console.log('Exception: ', error);

            throw new Error(
                `Error inserting record into ${tableName} DynamoDB: ${error.message}`,
            );
        }
    }

    async batchInsert(tableName: string, records: any[]): Promise<void> {
        const params: BatchWriteItemCommandInput = {
            RequestItems: {
                [tableName]: records.map((record) => ({
                    PutRequest: {
                        Item: record,
                    },
                })),
            },
        };

        try {
            await this.dynamoDB.batchWriteItem(params);
        } catch (error) {
            throw new Error(
                `Error inserting records into ${tableName} DynamoDB: ${error.message}`,
            );
        }
    }

    async getData(tableName: string): Promise<any[]> {
        const params = {
            TableName: tableName,
        };
        try {
            const data = await this.dynamoDB.scan(params);
            this.dynamoDB
            return (data.Items as any[]);
        } catch (error) {
            throw new Error(
                `Error fetching ${tableName} from DynamoDB: ${error.message}`,
            );
        }
    }
}
