import { View, Text, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../AppRoutes';

type HomeProps = NativeStackScreenProps<RootStackParamList>;

export default function Home({ navigation }: HomeProps) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="navigate" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}
