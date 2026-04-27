import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive, Min, Max } from 'class-validator';

export class CreateReinsuranceDto {
  @ApiProperty({ description: 'Insurance pool ID' })
  @IsString()
  poolId: string;

  @ApiProperty({ description: 'Coverage limit for the contract' })
  @IsNumber()
  @IsPositive()
  coverageLimit: number;

  @ApiProperty({ description: 'Premium rate expressed as a decimal between 0 and 1', minimum: 0, maximum: 1 })
  @IsNumber()
  @Min(0)
  @Max(1)
  premiumRate: number;
}
