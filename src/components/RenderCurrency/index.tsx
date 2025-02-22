import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.ts';
import {StarSvg} from '../../assets';

type CurrencyProps = {
  selectedCurrency?: string;
  ratedCurrency: string;
  rate: number;
  activeStar?: boolean;
  onStarPress?: () => void;
};

const RenderCurrency: FC<CurrencyProps> = props => {
  const {
    selectedCurrency = 'EUR',
    ratedCurrency,
    rate,
    onStarPress,
    activeStar,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.selectedCurrency}>
        {selectedCurrency}/{ratedCurrency}:
      </Text>
      <View style={styles.rateContainer}>
        <Text style={styles.rate}>{rate}</Text>
      </View>
      <TouchableOpacity onPress={onStarPress}>
        <StarSvg color={activeStar ? 'orange' : 'gray'} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(RenderCurrency);
