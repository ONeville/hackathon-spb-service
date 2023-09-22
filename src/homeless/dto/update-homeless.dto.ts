import { PartialType } from '@nestjs/mapped-types';
import { CreateHomelessDto } from './create-homeless.dto';

export class UpdateHomelessDto extends PartialType(CreateHomelessDto) {}
