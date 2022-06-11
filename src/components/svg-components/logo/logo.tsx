import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export default function Logo(props: SvgProps) {
  return (
    <Svg width={21} height={26} fill="none" {...props}>
      <Path
        d="m6.23 5.24-.958 5.264H0L1.871 0h18.441L16.73 5.24H6.231Zm6.893 5.264H5.318L2.556 26l10.567-15.496Z"
        fill="#FFB81C"
      />
    </Svg>
  );
}
