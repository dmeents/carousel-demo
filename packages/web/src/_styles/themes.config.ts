import { Theme } from './themes.interface';

const modes = {
  dark: {
    fontColor: '#E0E0E0',
    borderColor: '#424242',
    background: '#212121',
    shadow10: '',
    insetShadow10: '',
    formBackground: '#F5F5F51A',
  },
  light: {
    fontColor: '#212121',
    borderColor: '#EEEEEE',
    background: '#FFFFFF',
    formBackground: '#F5F5F566',
    shadow10: '0px 2px 5px 1px rgba(191,191,191,0.65)',
    insetShadow10: 'inset 0px 0px 10px rgba(191,191,191,0.65)',
  },
};

export default function theme(mode = 'light'): Theme {
  return {
    ...modes[mode],
    grey0: '#F5F5F5',
    grey10: '#EEEEEE',
    grey20: '#BDBDBD',
    grey30: '#757575',
    primary10: '#FF7777',
    primary20: '#F55D5D',
    primary30: '#DC4444',
    secondary10: '#62DBC9',
    secondary20: '#2FA896',
    secondary30: '#007563',
    transparency1: '03',
    transparency5: '0D',
    transparency10: '1A',
    transparency20: '33',
    transparency30: '4D',
    transparency40: '66',
    transparency50: '80',
    transparency60: '99',
    transparency70: 'B3',
    transparency80: 'CC',
    transparency90: 'E6',
    white: '#FFFFFF',
    black: '#333333',
    success: '#388E3C',
    warning: '#F57C00',
    failure: '#d32f2f',
  };
}
