import { TranslateBody } from '@/types/types';
import { OpenAIStream, ClaudeStream } from '@/utils';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { inputLanguage, outputLanguage, inputCode, model, apiKey } =
      (await req.json()) as TranslateBody;

    let stream;
    if (model.startsWith('claude')) {
      stream = await ClaudeStream(
        inputLanguage,
        outputLanguage,
        inputCode,
        model,
        apiKey,
      );
    } else {
      stream = await OpenAIStream(
        inputLanguage,
        outputLanguage,
        inputCode,
        model,
        apiKey,
      );
    }

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};

export default handler;