import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { SGlobal, GlobalStyle } from './_styles/global.styles';
import theme from './_styles/themes.config';
import { GlobalNavigation } from './components/global-navigation/global-navigation.component';
import { HomePage } from './pages/home/home.page';
import { load } from './_helpers/manage-local-storage';

export const App: React.FC = () => {
  const [themeToUse, setTheme] = useState('light');

  useEffect(() => {
    const settings = load('carousel:settings');
    setTheme(settings?.theme);
  }, []);

  return (
    <ThemeProvider theme={theme(themeToUse)}>
      <GlobalStyle />
      <SGlobal.Page>
        <GlobalNavigation />
        <HomePage />
      </SGlobal.Page>
    </ThemeProvider>
  );
};
