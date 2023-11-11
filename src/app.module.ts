import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiModule } from './ai/ai.module';
import { EnoughModule } from './enough/enough.module';
import { SupabaseService } from './supabase/supabase.service';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [AiModule, EnoughModule, SupabaseModule],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
