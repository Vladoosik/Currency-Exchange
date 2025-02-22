import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import Config from 'react-native-config';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_BASE_URL,
  }),
  endpoints: builder => ({
    getRates: builder.query({
      query: () => `latest?access_key=${Config.API_KEY}`,
      async onQueryStarted(_, {queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          await AsyncStorage.setItem('cachedRates', JSON.stringify(data));
        } catch (err) {
          showMessage({
            type: 'danger',
            message: 'filed to upload currency',
            duration: 6000,
            description: 'Check your internet connection',
          });
        }
      },
    }),
  }),
});

export const {useGetRatesQuery} = currencyApi;
