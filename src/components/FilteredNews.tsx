import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';

import { urlBuilder } from '../helpers/urlBuilder';
import { TArticle } from '../types/articleTypes';

import { NewsCard } from './NewsCard';

export const FilteredNews = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);
  const [isFilterModalOpened, setIsFilterModalOpened] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('us');
  const [category, setCategory] = useState<string>('general');
  const [url, setUrl] = useState<string>(() => urlBuilder('live'));

  const handleCountryChange = (event: any) => {
    setCountry(event.target?.value);
  };
  const handleCategoryChange = (event: any) => {
    setCategory(event.target?.value);
  };
  const handleApply = () => {
    setIsFilterModalOpened(false);
    setUrl(urlBuilder('search', country, category));
  };

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
      key='filtered'
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', gap: 10, alignContent: 'center', marginLeft: 10 }}>
        <h2>filtered news</h2>
        <Button
          sx={{ height: 35, marginTop: 2 }}
          variant='contained'
          onClick={() => setIsFilterModalOpened(!isFilterModalOpened)}
        >
          Open filters
        </Button>
      </div>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex', alignContent: 'center', flexWrap: 'wrap', marginLeft: '18vw', transitionDuration: 1 }}
      >
        <List height={800} itemCount={articles?.length} itemSize={580} layout='vertical' width={1400}>
          {Row}
        </List>
      </Container>
      <Dialog
        open={isFilterModalOpened}
        sx={{ display: 'flex', flexDirection: 'column', width: 350, height: 500 }}
        onClose={() => setIsFilterModalOpened(false)}
      >
        <DialogTitle>Select filters</DialogTitle>
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <DialogContent>
            <FormControl>
              <InputLabel>Country</InputLabel>
              <Select
                defaultValue='us'
                id='countrySelect'
                label='Country'
                sx={{ width: 150, height: 50 }}
                value={country}
                onChange={handleCountryChange}
              >
                <MenuItem value='us'>USA</MenuItem>
                <MenuItem value='ua'>Ukraine</MenuItem>
                <MenuItem value='it'>Italy</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogContent>
            <FormControl>
              <InputLabel>Category</InputLabel>
              <Select
                defaultValue='general'
                id='categorySelect'
                label='Category'
                sx={{ width: 150 }}
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value='general'>General</MenuItem>
                <MenuItem value='business'>Business</MenuItem>
                <MenuItem value='science'>Science</MenuItem>
                <MenuItem value='Sports'>Sports</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <Button sx={{ marginBottom: 2 }} variant='contained' onClick={handleApply}>
            Apply
          </Button>
        </Container>
      </Dialog>
    </motion.div>
  );
};
