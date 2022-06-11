import React from 'react';
import { ButtonProps, Text, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import AppFieldLabel from '../app-field-label/app-field-label';

const ButtonBottomSheetSelect = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: 1px;
  border-color: ${props => props.theme.black_10};
  padding-top: 18px;
  font-size: ${props => props.theme.fontSize.md};
  padding-bottom: 18px;
  padding-left: 16px;
  box-shadow: ${props => props.theme.shadow};
  background-color: ${props => props.theme.white_100};
  color: ${props => props.theme.black_70};
  padding-right: 16px;
  width: 100%;
`;

const MinorPadding = styled.View`
  padding-bottom: 8px;
`;

type AppTextInputProps = TouchableOpacityProps & {
  label: string;
  placeholder: string;
  value?: string;
};
export default function AppBottomSheetSelect(props: AppTextInputProps) {
  return (
    <MinorPadding>
      <AppFieldLabel>{props.label}</AppFieldLabel>
      <ButtonBottomSheetSelect {...props}>
        <Text>{props.value ? props.value : props.placeholder}</Text>
      </ButtonBottomSheetSelect>
    </MinorPadding>
  );
}
