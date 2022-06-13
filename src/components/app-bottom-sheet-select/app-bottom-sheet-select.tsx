import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import AppFieldLabel from '../app-field-label/app-field-label';
import {
  ButtonBottomSheetSelect,
  MinorPadding,
  StyledText,
} from './app-bottom-sheet-select.style';

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
        <StyledText>{props.value ? props.value : props.placeholder}</StyledText>
      </ButtonBottomSheetSelect>
    </MinorPadding>
  );
}
