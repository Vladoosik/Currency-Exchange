import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useCheckNetwork = (onReconnect?: () => void): boolean => {
  const [isOffline, setIsOffline] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOffline(!state.isConnected);

      if (state.isConnected && onReconnect) {
        setInterval(() => {
          onReconnect();
        }, 6000);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [onReconnect]);

  return isOffline;
};
