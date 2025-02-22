import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles.ts';

const EmptyListComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>List is Empty ¯\_(ツ)_/¯</Text>
    </View>
  );
};

export default EmptyListComponent;
