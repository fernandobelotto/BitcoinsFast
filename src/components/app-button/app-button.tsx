import React from 'react';
import { ButtonProps } from 'react-native';
import { AppButtonStyled, AppButtonTextStyled } from './app-button.style';

type AppButtonProps = ButtonProps & {
  children?: string | undefined;
  disabled?: boolean;
};

export default function AppButton(props: AppButtonProps) {
  return (
    <>
      <AppButtonStyled {...props}>
        <AppButtonTextStyled {...props}>{props.title}</AppButtonTextStyled>
      </AppButtonStyled>
    </>
  );
}
