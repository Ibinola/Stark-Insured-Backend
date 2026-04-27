import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsObject, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'User email address' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ description: 'Free-form user profile data', type: Object })
  @IsObject()
  @IsOptional()
  profileData?: any;

  @ApiPropertyOptional({ description: 'Encrypted push subscription payload' })
  @IsString()
  @IsOptional()
  pushSubscription?: any;
}
