import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValueInStorage = async (
  key: string,
): Promise<string | null | boolean> => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const setValueInStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
};
