import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useCheckNetwork = (onReconnect?: () => void): boolean => {
  const [isOffline, setIsOffline] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const offline = !state.isConnected;
      setIsOffline(offline);

      if (!offline && onReconnect) {
        onReconnect();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [onReconnect]);

  return isOffline;
};
