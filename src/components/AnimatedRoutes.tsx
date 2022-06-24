import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { FilteredNews } from './FilteredNews';
import { Homepage } from './Home';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route element={<FilteredNews />} path='/filters' />

        <Route element={<Homepage />} path='/' />
      </Routes>
    </AnimatePresence>
  );
};
