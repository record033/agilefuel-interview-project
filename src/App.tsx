import React, { createContext, useContext, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AnimatedRoutes } from './components/AnimatedRoutes';
import { Navbar } from './components/Navbar';

type TThemeType = 'dark' | 'light';

interface IThemeSwitcherData {
  onChangeTheme(t: TThemeType): void;
  themeType: TThemeType;
}

const ThemeSwitcherContext = createContext<IThemeSwitcherData>({
  onChangeTheme: () => {},
  themeType: 'light',
});

export const App: React.FC = () => {
  const [themeType, setThemeType] = useState<TThemeType>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeType,
        },
      }),
    [themeType],
  );

  const contextData: IThemeSwitcherData = useMemo(
    () => ({
      onChangeTheme: setThemeType,
      themeType,
    }),
    [themeType],
  );

  return (
    <ThemeSwitcherContext.Provider value={contextData}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <BrowserRouter>
            <Navbar />
            <AnimatedRoutes />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

export const useThemeSwitcher = () => useContext(ThemeSwitcherContext);
