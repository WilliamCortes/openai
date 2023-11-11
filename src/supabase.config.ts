import { createClient, SupabaseClient } from '@supabase/supabase-js';
import 'dotenv/config';

export const supabaseConfig = {
  apiKey: process.env.SUPABASE_API_KEY || '',
  apiURL: process.env.SUPABASE_STOREGE_URL || '',
} as const;

export const supabase: SupabaseClient = createClient(
  supabaseConfig.apiURL,
  supabaseConfig.apiKey,
);
