import React from 'react';
import { AppButtonStyled, AppButtonTextStyled } from './app-button.style';

type AppButtonProps = {
  children: string;
  [key: string]: string | number | boolean;
};

export default function AppButton(props: AppButtonProps) {
  return (
    <>
      <AppButtonStyled>
        <AppButtonTextStyled>{props.children}</AppButtonTextStyled>
      </AppButtonStyled>
    </>
  );
}
