import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateNotificationSettingsDto {
  @ApiPropertyOptional({ description: 'Enable email notifications' })
  @IsOptional()
  @IsBoolean()
  emailEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Enable push notifications' })
  @IsOptional()
  @IsBoolean()
  pushEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Notify on new contributions' })
  @IsOptional()
  @IsBoolean()
  notifyContributions?: boolean;

  @ApiPropertyOptional({ description: 'Notify on milestone changes' })
  @IsOptional()
  @IsBoolean()
  notifyMilestones?: boolean;

  @ApiPropertyOptional({ description: 'Notify on approaching deadlines' })
  @IsOptional()
  @IsBoolean()
  notifyDeadlines?: boolean;
}
