import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, ArrayMinSize, IsArray, Matches } from 'class-validator';

/** AutoWA: up to 500 numbers (digits with country code) per batch lookup. */
export class CheckNumbersBulkDto {
  @ApiProperty({ type: [String], example: ['923001234567', '923001234568'], maxItems: 500 })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(500)
  @Matches(/^[0-9]{6,15}$/, { each: true, message: 'each number must be 6-15 digits' })
  numbers!: string[];
}
