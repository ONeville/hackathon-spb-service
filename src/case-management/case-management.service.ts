import { Injectable } from '@nestjs/common';
import { ProcessDataService, Case } from 'src/core';

@Injectable()
export class CaseManagementService {
  constructor(private readonly dataService: ProcessDataService) { }

  async addCase(record: Case): Promise<any> {
    const payload = {
      "createdDate": {
        "S": record.createdDate,
      },
      "requestUser": {
        "M": record.requestUser,
      },
      "services": {
        "M": record.services,
      },
      "host": {
        "M": record.host,
      },
      "status": {
        "S": record.status,
      },
      "comments": {
        "S": record.comments,
      },
      "lastUpdateDate": {
        "S": record.lastUpdateDate,
      },
      "id": {
        "S": record.id,
      },
      "caseId": {
        "S": record.caseId,
      }
    };

    try {
      const result = await this.dataService.addOne('case-management', payload);
      return result;
    } catch (error) {
      console.log('Exception: ', error);

      throw new Error(
        `Error inserting record into DynamoDB: ${error.message}`,
      );
    }
  }

  async getCases(): Promise<Case[]> {
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
      return result.map(d => mapObj(d) as Case);
    } catch (error) {
      console.log('Exception: ', error);

      throw new Error(
        `Error inserting record into DynamoDB: ${error.message}`,
      );
    }
  }
  // async addOneCabin(record: Cabin): Promise<any> {
  //   const payload = {
  //     "city": {
  //       "S": record.city
  //     },
  //     "location": {
  //       "S": record.location
  //     },
  //     "cabinId": {
  //       "S": record.cabinId.toString()
  //     },
  //     "site": {
  //       "S": record.site
  //     },
  //     "id": {
  //       "S": record.id
  //     },
  //     "zipCode": {
  //       "N": record.zipCode.toString()
  //     }
  //   };

  //   try {
  //     const result = await this.dataService.addOne('cabins', payload);
  //     return result;
  //   } catch (error) {
  //     console.log('Exception: ', error);

  //     throw new Error(
  //       `Error inserting record into DynamoDB: ${error.message}`,
  //     );
  //   }
  // }

  // async getCabins(): Promise<any> {
  //   const mapObj = (data) => Object.keys(data).reduce((prev, curr) => {
  //     prev[curr] = data[curr]['S'] ? data[curr]['S'] : data[curr]['N'];
  //     return prev;
  //   }, {})
  //   try {
  //     const result = await this.dataService.getData('cabins');
  //     return result.map(d => mapObj(d));
  //   } catch (error) {
  //     console.log('Exception: ', error);

  //     throw new Error(
  //       `Error inserting record into DynamoDB: ${error.message}`,
  //     );
  //   }
  // }
}
