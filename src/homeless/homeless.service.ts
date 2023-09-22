import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { HomelessUser, Cabin } from 'src/core/models/user.model';
import { ProcessDataService } from 'src/core';

@Injectable()
export class HomelessService {
  private readonly tableName = 'homeless-user';

  constructor(private readonly dataService: ProcessDataService) { }


  async addOneCabin(record: Cabin): Promise<any> {
    const payload = {
      "city": {
        "S": record.city
      },
      "location": {
        "S": record.location
      },
      "cabinId": {
        "S": record.cabinId.toString()
      },
      "site": {
        "S": record.site
      },
      "id": {
        "S": record.id
      },
      "zipCode": {
        "N": record.zipCode.toString()
      }
    };

    try {
      const result = await this.dataService.addOne('cabins', payload);
      return result;
    } catch (error) {
      console.log('Exception: ', error);

      throw new Error(
        `Error inserting record into DynamoDB: ${error.message}`,
      );
    }
  }

  async getCabins(): Promise<any> {
    const mapObj = (data) => Object.keys(data).reduce((prev, curr) => {
      prev[curr] = data[curr]['S'] ? data[curr]['S'] : data[curr]['N'];
      return prev;
    }, {})
    try {
      const result = await this.dataService.getData('cabins');
      return result.map(d => mapObj(d));
    } catch (error) {
      console.log('Exception: ', error);

      throw new Error(
        `Error inserting record into DynamoDB: ${error.message}`,
      );
    }
  }

  async getCase(): Promise<any> {
    const mapObjScalarType = (data) => Object.keys(data).reduce((prev, curr) => {
      prev[curr] = data[curr]['S'] ? data[curr]['S'] : data[curr]['N'];
      return prev;
    }, {});
    const mapObj = (data) => Object.keys(data).reduce((prev, curr) => {
      prev[curr] = data[curr]['M'] ? mapObjScalarType(data[curr]['M']) : data[curr]['S'] ? data[curr]['S'] : data[curr]['N'];
      return prev;
    }, {});

    try {
      const result = await this.dataService.getData('case-management');
      return result; //.map(d => mapObj(d));
    } catch (error) {
      console.log('Exception: ', error);

      throw new Error(
        `Error inserting record into DynamoDB: ${error.message}`,
      );
    }
  }

  // async addOne(user: HomelessUser): Promise<HomelessUser> {
  //   const params = {
  //     TableName: this.tableName,
  //     Item: user,
  //   };

  //   try {
  //     await this.dynamoDB.put(params).promise();
  //     return user;
  //   } catch (error) {
  //     throw new Error('Error creating HomelessUser in DynamoDB');
  //   }
  // }

  // async getHomelessUsers(): Promise<HomelessUser[]> {
  //   const params = {
  //     TableName: this.tableName,
  //   };

  //   try {
  //     const data = await this.dynamoDB.scan(params).promise();
  //     return data.Items as HomelessUser[];
  //   } catch (error) {
  //     throw new Error('Error fetching HomelessUsers from DynamoDB');
  //   }
  // }
}
