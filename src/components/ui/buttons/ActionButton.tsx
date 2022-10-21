import React from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

import { colors } from '../../../style/theme';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  loading?: boolean;
}

export const ActionButton: React.FC<ButtonProps> = ({
  title,
  disabled,
  onPress,
  style,
  loading,
}) => {
  return (
    <Pressable disabled={disabled || loading} onPress={onPress}>
      <View style={[styles.button, style]}>
        {loading ? (
          <ActivityIndicator color={'#ffffff'} />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: colors.green.dark,
    width: 128,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Fredoka One',
    fontSize: 20,
    color: colors.white,
  },
});
