import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomelessService } from './homeless.service';
import { CreateHomelessDto } from './dto/create-homeless.dto';
import { UpdateHomelessDto } from './dto/update-homeless.dto';
import { HomelessUser } from 'src/core/models/user.model';

@Controller('homeless')
export class HomelessController {
  constructor(private readonly homelessService: HomelessService) {}

  @Post()
  create(@Body() createHomelessDto: HomelessUser) {
    return this.homelessService.addOne(createHomelessDto);
  }

  @Get()
  findAll() {
    return this.homelessService.getHomelessUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.homelessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomelessDto: UpdateHomelessDto) {
    // return this.homelessService.update(+id, updateHomelessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.homelessService.remove(+id);
  }
}
