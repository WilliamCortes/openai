import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletion } from 'openai/resources';
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

@Injectable()
export class AiService {
  async getStart(message: string): Promise<string | null> {
    const completion: ChatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
    });
    return completion.choices[0].message.content;
  }
}
