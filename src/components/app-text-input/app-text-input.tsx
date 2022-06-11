import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import AppFieldLabel from '../app-field-label/app-field-label';

const TextInputStyled = styled(TextInput)`
  border-radius: 4px;
  border-width: 1px;
  border-color: ${props => (props.error ? 'red' : props.theme.black)};
  padding-top: 18px;
  font-size: ${props => props.theme.fontSize.md};
  padding-bottom: 18px;
  padding-left: 16px;
  background-color: ${props => props.theme.white_100};
  color: ${props => props.theme.black_70};
  padding-right: 16px;
  width: 100%;
`;

type AppTextInputProps = TextInputProps & {
  label: string;
  error: boolean;
};

const StyledView = styled.View`
  width: 100%;
`;

export default function AppTextInput(props: AppTextInputProps) {
  return (
    <>
      <StyledView>
        <AppFieldLabel>{props.label}</AppFieldLabel>
        <TextInputStyled {...props} />
      </StyledView>
    </>
  );
}
