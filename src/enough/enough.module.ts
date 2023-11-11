import { Module } from '@nestjs/common';
import { EnoughController } from './enough.controller';
import { EnoughService } from './enough.service';
import { SupabaseService } from 'src/supabase/supabase.service';

@Module({
  controllers: [EnoughController],
  providers: [EnoughService, SupabaseService],
})
export class EnoughModule {}
