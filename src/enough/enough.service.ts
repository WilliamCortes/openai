import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class EnoughService {
  constructor(private readonly supabaseService: SupabaseService) {}

  getPostBySlug(slug: string) {
    return this.supabaseService.getPostBySlug(slug);
  }

  getPostById(id: string) {
    return this.supabaseService.getPostById(id);
  }

  getPosts() {
    return this.supabaseService.getPosts();
  }
}
