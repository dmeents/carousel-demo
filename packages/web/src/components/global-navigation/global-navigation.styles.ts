import styled from 'styled-components';
import { ViewCarousel } from '@styled-icons/material-twotone/ViewCarousel';
import { LightMode } from '@styled-icons/material-twotone/LightMode';
import { DarkMode } from '@styled-icons/material-twotone/DarkMode';

export const SNavigation = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
  `,
  Icon: styled(ViewCarousel)`
    height: 35px;
    width: 35px;
    margin-right: 15px;
    color: ${({ theme }) => theme.primary20};
  `,
  ThemeChangeWrapper: styled.div`
    display: flex;

    & > div:not(:last-child) {
      margin-right: 15px;
    }
  `,
  ThemeOption: styled.div`
    cursor: pointer;
  `,
  LightModeOption: styled(LightMode)<{ selected: boolean }>`
    height: 25px;
    width: 25px;
    opacity: ${({ selected }) => (selected ? 1 : 0.5)};
    color: ${({ theme, selected }) =>
      selected ? theme.primary20 : theme.fontColor};
    transition: all 0.25s ease;

    &:hover {
      opacity: 1;
    }
  `,
  DarkModeOption: styled(DarkMode)<{ selected: boolean }>`
    height: 25px;
    width: 25px;
    opacity: ${({ selected }) => (selected ? 1 : 0.5)};
    color: ${({ theme, selected }) =>
      selected ? theme.primary20 : theme.fontColor};
    transition: all 0.25s ease;

    &:hover {
      opacity: 1;
    }
  `,
};
