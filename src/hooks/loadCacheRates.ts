import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLoadCachedRates = () => {
  const [cachedData, setCachedData] = useState(null);

  useEffect(() => {
    const loadCachedRates = async () => {
      try {
        const storedRates = await AsyncStorage.getItem('cachedRates');
        if (storedRates) {
          setCachedData(JSON.parse(storedRates));
        }
      } catch (error) {
        console.error('error while upload currency:', error);
      }
    };

    loadCachedRates();
  }, []);

  return cachedData;
};
