import { Injectable } from '@nestjs/common';
import { supabase } from './supabase.config';

@Injectable()
export class SupabaseService {
  async getPosts() {
    const { data, error } = await supabase.from('posts').select('*');
    if (error) console.error('🚀 ~ SupabaseService- getPost:', { error });
    return data;
  }

  async getPostById(id: string) {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id);
    if (error) console.error('🚀 ~ SupabaseService - getPostById:', { error });
    return data;
  }

  async getPostBySlug(slug: string) {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug);
    if (error) console.error('🚀 ~ SupabaseService-getPostBySlug:', { error });
    return data?.[0];
  }
}
