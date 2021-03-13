import React from 'react';
import { SNavigation } from './global-navigation.styles';
import { handleChangeTheme } from './_helpers/change-theme';
import { load } from '../../_helpers/manage-local-storage';

export const GlobalNavigation: React.FC = () => {
  const { theme } = load('carousel:settings');

  return (
    <SNavigation.Container>
      <SNavigation.Title>
        <SNavigation.Icon />
        <h2>Carousel Demo</h2>
      </SNavigation.Title>
      <SNavigation.ThemeChangeWrapper>
        <SNavigation.ThemeOption>
          <SNavigation.LightModeOption
            selected={theme === 'light'}
            onClick={() => handleChangeTheme('light')}>
            Light
          </SNavigation.LightModeOption>
        </SNavigation.ThemeOption>
        <SNavigation.ThemeOption>
          <SNavigation.DarkModeOption
            selected={theme === 'dark'}
            onClick={() => handleChangeTheme('dark')}>
            Dark
          </SNavigation.DarkModeOption>
        </SNavigation.ThemeOption>
      </SNavigation.ThemeChangeWrapper>
    </SNavigation.Container>
  );
};
