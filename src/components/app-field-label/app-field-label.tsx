import React from 'react';
import { AppFieldLabelStyle } from './app-field-label.style';

type AppFieldLabel = {
  children: string;
};

export default function AppFieldLabel({
  children,
}: AppFieldLabel): JSX.Element {
  return (
    <>
      <AppFieldLabelStyle>{children}</AppFieldLabelStyle>
    </>
  );
}
