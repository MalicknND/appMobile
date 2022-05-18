import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

function Button({ title }) {
  return (
    <View style={styles.button}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
});

export default Button;
