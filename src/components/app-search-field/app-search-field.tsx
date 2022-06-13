import React from 'react';
import { TextInputProps } from 'react-native';
import SearchIcon from '../svg-components/search/search-icon';
import { StyledView, TextInputStyled } from './app-search-field.style';

type AppTextInputProps = TextInputProps;

export default function AppSearchField(props: AppTextInputProps) {
  return (
    <>
      <StyledView>
        <SearchIcon />
        <TextInputStyled {...props} />
      </StyledView>
    </>
  );
}
