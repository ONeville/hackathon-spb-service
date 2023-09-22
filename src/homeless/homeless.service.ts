import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { HomelessUser } from 'src/core/models/user.model';

@Injectable()
export class HomelessService {
  private readonly tableName= 'homeless-user';
  private readonly dynamoDB = new DynamoDB.DocumentClient(); // Initialize DynamoDB client

  constructor(private readonly configService: ConfigService) { }

  async addOne(user: HomelessUser): Promise<HomelessUser> {
    const params = {
      TableName: this.tableName,
      Item: user,
    };

    try {
      await this.dynamoDB.put(params).promise();
      return user;
    } catch (error) {
      throw new Error('Error creating HomelessUser in DynamoDB');
    }
  }

  async getHomelessUsers(): Promise<HomelessUser[]> {
    const params = {
      TableName: this.tableName,
    };

    try {
      const data = await this.dynamoDB.scan(params).promise();
      return data.Items as HomelessUser[];
    } catch (error) {
      throw new Error('Error fetching HomelessUsers from DynamoDB');
    }
  }
}
