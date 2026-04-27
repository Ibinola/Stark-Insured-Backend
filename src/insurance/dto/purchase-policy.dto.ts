import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNumber, IsPositive } from 'class-validator';
import { RiskType } from '../enums/risk-type.enum';

export class PurchasePolicyDto {
  @ApiProperty({ description: 'ID of the purchasing user' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'Insurance pool ID' })
  @IsString()
  poolId: string;

  @ApiProperty({ description: 'Risk type for the insurance policy', enum: RiskType })
  @IsEnum(RiskType)
  riskType: RiskType;

  @ApiProperty({ description: 'Requested coverage amount', minimum: 0.01 })
  @IsNumber()
  @IsPositive()
  coverageAmount: number;
}
