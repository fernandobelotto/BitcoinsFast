import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import AppFieldLabel from '../app-field-label/app-field-label';
import SearchIcon from '../svg-components/search/search-icon';

const TextInputStyled = styled(TextInput)`
  font-size: ${props => props.theme.fontSize.md};

  color: ${props => props.theme.black_70};
  width: 100%;
  margin: 0;
  padding: 0;
  margin-left: 10px
`;

type AppTextInputProps = TextInputProps;

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${props => (props.error ? 'red' : props.theme.black)};
  padding: 16px;
  background-color: ${props => props.theme.white_100};
  width: 100%;
`;

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
