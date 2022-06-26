import { TConfig } from '../types/configTypes';

const config: TConfig = {
  baseUrl: 'http://api.mediastack.com/v1/news?',
  live: 'live?',
  search: 'search',
  apiKey: 'access_key=7101e48a798e2053c65d6c6e8213d50d',
};

export const urlBuilder = (requestType: any): string => {
  if (requestType === 'live') {
    return `${config.baseUrl}${config.apiKey}`;
  }
  if (requestType === 'filtered') {
    return `${config.baseUrl}${config.apiKey}`;
  }

  return `${config.baseUrl}${config.apiKey}`;
};
