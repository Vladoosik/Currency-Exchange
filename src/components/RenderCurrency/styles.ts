import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#d5d5d5',
  },
  rateContainer: {
    flexGrow: 1,
  },
  rate: {},
  selectedCurrency: {
    fontWeight: 'bold',
    width: 140,
    fontSize: 14,
  },
});
