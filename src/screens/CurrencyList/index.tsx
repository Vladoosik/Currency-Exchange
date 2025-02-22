import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useGetRatesQuery} from '../../services/currencyApi.ts';
import {EmptyListComponent, RenderCurrency} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import {setFavorite} from '../../services/favoriteSlicer.ts';
import {useLoadCachedRates} from '../../hooks/loadCacheRates.ts';
import {useCheckNetwork} from '../../hooks/useCheckNetwork.ts';
import {styles} from './styles.ts';
import Config from 'react-native-config';

const BATCH_SIZE = 20;
const CurrencyList = () => {
  const dispatch = useDispatch();
  const favoriteCurrency = useSelector(
    (state: RootState) => state.favoriteCurrency.favoriteCurrency,
  );
  const {data, isLoading, refetch} = useGetRatesQuery(undefined);
  const cachedData: typeof data = useLoadCachedRates();
  const isOffline = useCheckNetwork(() => {
    if (!data && !cachedData) {
      refetch();
    }
  });

  console.log(isOffline);

  const ratesData = cachedData?.rates || data?.rates || {};
  const baseCurrency = cachedData?.base || data?.base || 'EUR';
  const [visibleData, setVisibleData] = useState(
    ratesData ? Object?.entries(ratesData).slice(0, BATCH_SIZE) : [],
  );
  const [loadedCount, setLoadedCount] = useState<number>(BATCH_SIZE);
  const loadedMoreValue = loadedCount < Object.entries(ratesData).length;

  const loadMoreData = () => {
    if (ratesData) {
      const newData = Object.entries(ratesData).slice(
        0,
        loadedCount + BATCH_SIZE,
      );
      setVisibleData(newData);
      setLoadedCount(prev => prev + BATCH_SIZE);
    }
  };

  const handleSelectCurrency = (item: [string, number]) => {
    dispatch(setFavorite(item));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isOffline && cachedData ? (
        <Text style={styles.offlineStatus}>
          You are offline, now used cached data
        </Text>
      ) : null}
      {isLoading && !cachedData ? (
        <ActivityIndicator style={{flex: 1}} />
      ) : data || cachedData ? (
        <FlatList
          ListEmptyComponent={<EmptyListComponent />}
          data={visibleData}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.3}
          ListFooterComponent={loadedMoreValue ? <ActivityIndicator /> : null}
          keyExtractor={([currency]) => currency}
          renderItem={({item}: {item: [string, number | unknown]}) => (
            <RenderCurrency
              activeStar={favoriteCurrency?.some(el => el[0] === item[0])}
              onStarPress={() => handleSelectCurrency(item as [string, number])}
              ratedCurrency={item[0]}
              rate={item[1] as number}
              selectedCurrency={baseCurrency}
            />
          )}
        />
      ) : (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>Error fetch Data</Text>
          <Text style={styles.offlineText}>
            Please check your internet connection
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CurrencyList;
