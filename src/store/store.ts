import {configureStore} from '@reduxjs/toolkit';
import {currencyApi} from '../services/currencyApi';
import favoriteCurrencyReducer from '../services/favoriteSlicer.ts';

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    favoriteCurrency: favoriteCurrencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
