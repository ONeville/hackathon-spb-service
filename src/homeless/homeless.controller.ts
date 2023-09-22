import { Cabin } from './../core/models/user.model';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { HomelessService } from './homeless.service';
import { HomelessUser } from 'src/core/models/user.model';
import { ProcessFileService, ProcessDataService } from 'src/core';
import { dataDumper } from 'src/core/services/data';

@Controller('homeless')
export class HomelessController {
  constructor(private readonly homelessService: HomelessService, private fileService: ProcessFileService,
    private dataService: ProcessDataService) { }


  @Post('loadDummyUsers')
  async loadDummy() {
    const data = this.fileService.mapData(dataDumper as any[]);

    await this.dataService.batchInsert('cabins', data.cabins);
    return data.cabins;
  }

  @Post('addCabin')
  addCabin(@Body() createHomelessDto: Cabin) {
    const request = {
      "id": "1695392067182-81744247811",
      "cabinId": 3,
      "location": "CA-ecxge",
      "site": "AD-Philadelphia-1",
      "city": "Philadelphia",
      "zipCode": 210321
    };
    console.log('New request -- ');

    return this.homelessService.addOneCabin(request);
  }

  @Get('getCabins')
  async getCabins() {
    return await this.homelessService.getCabins();
  }
  
  @Get('getCases')
  async getCases() {
    return await this.homelessService.getCase();
  }

  @Get('checkS3')
  async checkS3() {
    return await this.fileService.getFileData();
  }


  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   // return this.homelessService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHomelessDto: UpdateHomelessDto) {
  //   // return this.homelessService.update(+id, updateHomelessDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   // return this.homelessService.remove(+id);
  // }
}
