import { load, save } from '../../../_helpers/manage-local-storage';

type ThemeOptions = 'light' | 'dark';

export const handleChangeTheme = (theme: ThemeOptions) => {
  const currentSettings = load('carousel:settings');
  currentSettings.theme = theme;
  save('carousel:settings', currentSettings);
  window.location.reload();
};
