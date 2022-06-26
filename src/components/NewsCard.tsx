import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { TArticle } from '../types/articleTypes';

interface INewsCardProps {
  article: TArticle;
}

export const NewsCard: React.FC<any> = ({ article }) => (
  <Card sx={{ width: 1135, height: 680, backgroundColor: '#e3f2fd', marginBottom: 15, marginRight: 10 }}>
    <CardMedia alt='failed to load image' component='img' height='240' image={article.image} />
    <CardContent>
      <Typography>{article.title}</Typography>
    </CardContent>
    <CardContent>
      <Typography>{article.description}</Typography>
    </CardContent>
    <CardContent>
      <Typography>{article.author}</Typography>
    </CardContent>
    <CardContent>
      <a href={article.url}>read more..</a>
    </CardContent>
  </Card>
);
