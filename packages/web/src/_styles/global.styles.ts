import styled, { createGlobalStyle } from 'styled-components';
import { Theme } from './themes.interface';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html {
    font-family: Roboto,serif;
    --scrollbarBG: ${({ theme }) => theme.grey10};
    --thumbBG: ${({ theme }) => theme.grey30};
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: 400;
    font-family: Poppins,serif;
    letter-spacing: 2px;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    display: block;
    outline: none;

    &:focus {
      outline: none;
    }
  }

  button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
    outline: none;
  }
  
  *::-webkit-scrollbar {
    width: 12px;
  }  
  
  *::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border-radius: 8px;
    border: 3px solid var(--scrollbarBG);
  }
`;

export const SGlobal = {
  Page: styled.div``,
};
