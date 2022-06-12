import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';
import { Padding } from '../layout/padding';

export const AppBottomSheet = forwardRef<BottomSheetMethods | null, any>(
  (props, ref) => (
    <BottomSheet
      index={-1}
      enablePanDownToClose={true}
      ref={ref}
      snapPoints={useMemo(() => ['25%', '100%'], [])}
      handleStyle={styles.handle}
      backgroundStyle={styles.sheet}
      handleIndicatorStyle={styles.handleIndicator}>
      <Padding>{props.children}</Padding>
    </BottomSheet>
  ),
);

const styles = StyleSheet.create({
  handle: {
    paddingTop: 21,
  },
  handleIndicator: {
    backgroundColor: Colors.BLACK_10,
    width: 82,
  },
  sheet: {
    borderRadius: 18,
  },
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});
