import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Container } from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';

import { urlBuilder } from '../helpers/urlBuilder';
import { TArticle } from '../types/articleTypes';

import { NewsCard } from './NewsCard';

export const Homepage = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);

  const url = urlBuilder('everything');

  useEffect(() => {
    axios.get(url).then((response) => {
      setArticles(response.data.articles);
    });
  }, [url]);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <NewsCard article={articles?.[index]!} />
    </div>
  );

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      key='everything'
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', gap: 10, alignContent: 'center', marginLeft: 10 }}>
        <h2>news</h2>
      </div>

      <Container
        maxWidth='lg'
        sx={{ display: 'flex', alignContent: 'center', flexWrap: 'wrap', marginLeft: '18vw', transitionDuration: 1 }}
      >
        <List height={800} itemCount={articles?.length} itemSize={580} layout='vertical' width={1400}>
          {Row}
        </List>
      </Container>
    </motion.div>
  );
};
