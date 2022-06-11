import { CustomPlatform } from '../constants/plataform';
import { Platform } from 'react-native';

const map = {
  ios: CustomPlatform.IOS,
  android: CustomPlatform.ANDROID,
  web: CustomPlatform.WEB,
  macos: CustomPlatform.MACOS,
  windows: CustomPlatform.WINDOWS,
};

export const getPlataform = (): CustomPlatform => {
  return map[Platform.OS];
};
