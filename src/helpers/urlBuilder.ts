import { TConfig } from '../types/configTypes';

const config: TConfig = {
  baseUrl: 'https://newsapi.org/v2/',
  everything: 'everything?',
  filters: 'top-headlines?',
  apiKey: 'apiKey=940ca1aec98d4cdf81afcc253007f046',
};

export const urlBuilder = (requestType: any, country?: string, category?: string): string => {
  if (requestType === 'everything') {
    return `${config.baseUrl + config.everything}q=europe&${config.apiKey}`;
  }
  if (requestType === 'filtered') {
    return `${config.baseUrl + config.filters}country=${country}&category=${category}&${config.apiKey}`;
  }

  return `${config.baseUrl + config.everything}q=europe&${config.apiKey}`;
};
