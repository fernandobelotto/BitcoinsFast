import React, { Dispatch, SetStateAction } from 'react';

import { Picker } from '@react-native-picker/picker';

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
    <Picker
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
  );
}
