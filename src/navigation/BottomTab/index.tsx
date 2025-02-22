import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CurrencyList, FavoritePage} from '../../screens';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loadFavoriteCurrency} from '../../services/favoriteSlicer.ts';
import {CurrencyIcon, StarSvg} from '../../assets';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadDataStorage = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favoriteCurrency');
        if (storedFavorites) {
          dispatch(loadFavoriteCurrency(JSON.parse(storedFavorites)));
        }
      } catch (error) {
        console.error('error load data from AsyncStorage:', error);
      }
    };

    loadDataStorage();
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CurrencyList"
        options={{title: 'Currency List', tabBarIcon: CurrencyIcon}}
        component={CurrencyList}
      />
      <Tab.Screen
        name="Favorites"
        options={{title: 'Favorite List', tabBarIcon: StarSvg}}
        component={FavoritePage}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
