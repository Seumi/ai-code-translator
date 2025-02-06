export type AIModel = 'gpt-3.5-turbo' | 'gpt-4' | 'claude-2' | 'claude-instant-1';

export interface TranslateBody {
  inputLanguage: string;
  outputLanguage: string;
  inputCode: string;
  model: AIModel;
  apiKey: string;
}

export interface TranslateResponse {
  code: string;
}