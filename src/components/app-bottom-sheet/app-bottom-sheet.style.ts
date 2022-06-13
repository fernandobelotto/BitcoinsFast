import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
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
