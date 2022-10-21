import React, { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

const RoundBox: FC<ViewProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderColor: '#D9D9D9',
    borderWidth: 2,
    backgroundColor: '#fff',
    width: '100%',
    padding: 16,
  },
});
export default RoundBox;
