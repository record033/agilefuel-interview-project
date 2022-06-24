export type TArticlesResponse = {
  articles: TArticle[];
  status: string;
  totalResult: number;
};
export type TArticle = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
