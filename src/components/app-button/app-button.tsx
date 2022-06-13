import React from 'react';
import { ActivityIndicator, ButtonProps } from 'react-native';
import { Colors } from '../../styles/colors';
import { AppButtonStyled, AppButtonTextStyled } from './app-button.style';

type AppButtonProps = ButtonProps & {
  children?: string | undefined;
  disabled?: boolean;
  loading?: boolean;
};

export default function AppButton(props: AppButtonProps) {
  return (
    <>
      <AppButtonStyled {...props}>
        {props.loading ? (
          <ActivityIndicator size="small" color={Colors.BLACK_100} />
        ) : (
          <AppButtonTextStyled {...props}>{props.title}</AppButtonTextStyled>
        )}
      </AppButtonStyled>
    </>
  );
}
