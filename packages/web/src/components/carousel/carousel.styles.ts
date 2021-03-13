import styled from 'styled-components';
import { ArrowDropDownCircle } from '@styled-icons/material-twotone/ArrowDropDownCircle';

const Arrow = styled(ArrowDropDownCircle)`
  height: 30px;
  width: 30px;
  transform: rotate(90deg);
  cursor: pointer;
  transition: all 0.25s ease;
  color: ${({ theme }) => theme.grey30};

  &:hover {
    color: ${({ theme }) => theme.primary20};
  }
`;

export const SCarousel = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  SelectionWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;

    & > div {
      margin: 10px;
    }
  `,
  ThumbnailContainer: styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 15px;
    background: ${({ theme }) => `${theme.grey30}${theme.transparency5}`};
  `,
  Thumbnails: styled.div`
    display: flex;

    & > div:not(:last-child) {
      margin-right: 10px;
    }
  `,
  ThumbnailNavigation: styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;

    & > h3 {
      margin: 0 15px;
    }
  `,
  LeftArrow: styled(Arrow)`
    transform: rotate(90deg);
  `,
  RightArrow: styled(Arrow)`
    transform: rotate(-90deg);
  `,
};

export const SDetails = {
  Container: styled.div`
    width: 500px;
    border: 2px solid ${({ theme }) => theme.borderColor};
    height: max-content;

    & > div:not(:last-child) {
      border-bottom: 2px solid ${({ theme }) => theme.borderColor};
    }
  `,
  Title: styled.h3`
    padding: 10px 15px;
    border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  `,
  LineItem: styled.div`
    padding: 10px 15px;
    transition: all 0.25s ease;

    &:hover {
      background: ${({ theme }) => `${theme.grey30}${theme.transparency5}`};
    }

    & > h4 {
      text-transform: capitalize;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.secondary20};
    }

    & > div {
    }
  `,
};

export const SImage = {
  Container: styled.div`
    height: 500px;
    width: 500px;
    box-shadow: ${({ theme }) => theme.shadow10};
  `,
  Image: styled.div<{ image: string }>`
    height: 500px;
    width: 500px;
    background: url(${({ image }) => image}) right;
    background-size: contain;
  `,
};

export const SThumbnail = {
  Container: styled.div<{ selected: boolean }>`
    box-shadow: ${({ theme }) => theme.shadow10};
    border: 2px solid
      ${({ theme, selected }) =>
        selected ? theme.primary20 : theme.borderColor};
    transition: all 0.25s ease;
    cursor: pointer;
    opacity: ${({ selected }) => (selected ? 1 : 0.5)};

    &:hover {
      border: 2px solid ${({ theme }) => theme.primary20};
      opacity: 1;
    }
  `,
  Image: styled.div<{ image: string }>`
    height: 150px;
    width: 150px;
    background: url(${({ image }) => image}) right;
  `,
};
