import React from 'react';
import { TextInputProps } from 'react-native';
import AppFieldLabel from '../app-field-label/app-field-label';
import { StyledView, TextInputStyled } from './app-text-input.style';

type AppTextInputProps = TextInputProps & {
  label: string;
  error: boolean;
};

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
