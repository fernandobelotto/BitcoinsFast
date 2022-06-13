import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { forwardRef, useMemo } from 'react';
import { Padding } from '../layout/padding';
import { styles } from './app-bottom-sheet.style';

export const AppBottomSheet = forwardRef<BottomSheetMethods | null, any>(
  (props, ref) => (
    <BottomSheet
      index={0}
      enablePanDownToClose={true}
      ref={ref}
      snapPoints={useMemo(() => ['1%', '100%'], [])}
      handleStyle={styles.handle}
      backgroundStyle={styles.sheet}
      handleIndicatorStyle={styles.handleIndicator}>
      <Padding>{props.children}</Padding>
    </BottomSheet>
  ),
);
