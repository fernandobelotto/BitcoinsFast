import React, { Dispatch, SetStateAction } from 'react';

import { Picker } from '@react-native-picker/picker';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { BorderBox } from './app-select.style';

type Option = {
  value: number | string | boolean;
  label: string;
};

type AppSelectProps = {
  options: Option[];
  value: number | string | boolean;
  setValue: Dispatch<SetStateAction<any>>;
};

export default function AppSelect({
  options,
  value,
  setValue,
}: AppSelectProps) {
  return (
    <BorderBox>
      <Picker
        dropdownIconColor={Colors.GRAY_100}
        style={{
          color: Colors.GRAY_100,
          fontFamily: Fonts.POPPINS_BOLD,
        }}
        selectedValue={value}
        onValueChange={itemValue => {
          setValue(itemValue);
        }}>
        {options.map(option => {
          return (
            <Picker.Item
              key={option.label + option.value}
              label={option.label}
              value={option.value}
            />
          );
        })}
      </Picker>
    </BorderBox>
  );
}
