import React, { Dispatch, SetStateAction } from 'react';

import { Picker } from '@react-native-picker/picker';
import { Colors } from '../../styles/colors';
import styled from 'styled-components/native';

type Option = {
  value: number | string | boolean;
  label: string;
};

type AppSelectProps = {
  options: Option[];
  value: number | string | boolean;
  setValue: Dispatch<SetStateAction<any>>;
};

const BorderBox = styled.View`
  border-width: 1px;
  border-color: ${Colors.GRAY_50};
  border-radius: 4px;
  padding: 3px;
`;

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
