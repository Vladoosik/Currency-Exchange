import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {EmptyListComponent, RenderCurrency} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import {setFavorite} from '../../services/favoriteSlicer.ts';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favoriteCurrency = useSelector(
    (state: RootState) => state.favoriteCurrency.favoriteCurrency,
  );
  const handleSelectCurrency = (item: [string, number]) => {
    dispatch(setFavorite(item));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ListEmptyComponent={<EmptyListComponent />}
        data={favoriteCurrency}
        keyExtractor={([currency]) => currency}
        renderItem={({item}: {item: any}) => (
          <RenderCurrency
            activeStar
            onStarPress={() => handleSelectCurrency(item)}
            ratedCurrency={item[0]}
            rate={item[1]}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default FavoritePage;
