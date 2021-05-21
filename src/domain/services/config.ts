import { Options, NormalizedOptions } from 'ky';
import camelcaseKeys from 'camelcase-keys';

const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: 'https://jsonplaceholder.typicode.com',
  timeout: 7000,
  retry: 2,
  hooks: {
    afterResponse: [
      async (
        _request: Request,
        _options: NormalizedOptions,
        response: Response,
      ): Promise<Response> => {
        const body = new Blob(
          [JSON.stringify(camelcaseKeys(await response.json()), null, 2)],
          { type: 'application/json' },
        );
        const { headers, status, statusText } = response;
        const init = { headers, status, statusText };

        return new Response(body, init);
      },
    ],
  },
};

export default DEFAULT_API_OPTIONS;
