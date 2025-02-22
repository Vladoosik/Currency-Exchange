import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CurrencyItem = [string, number];

interface CurrencyState {
  favoriteCurrency: CurrencyItem[];
}

const initialState: CurrencyState = {
  favoriteCurrency: [],
};

const currencySlice = createSlice({
  name: 'favoriteCurrency',
  initialState,
  reducers: {
    setFavorite(state, action: PayloadAction<CurrencyItem>) {
      const item = action.payload;
      const exists = state.favoriteCurrency.some(el => el[0] === item[0]);

      if (exists) {
        state.favoriteCurrency = state.favoriteCurrency.filter(
          el => el[0] !== item[0],
        );
      } else {
        state.favoriteCurrency.push(item);
      }
      AsyncStorage.setItem(
        'favoriteCurrency',
        JSON.stringify(state.favoriteCurrency),
      ).catch(e => console.error('error save:', e));
    },
    loadFavoriteCurrency(state, action: PayloadAction<CurrencyItem[]>) {
      state.favoriteCurrency = action.payload;
    },
  },
});

export const {setFavorite, loadFavoriteCurrency} = currencySlice.actions;
export default currencySlice.reducer;
