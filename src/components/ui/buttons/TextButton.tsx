import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export const TextButton: React.FC<TextProps & TouchableOpacityProps> = ({
  onPress,
  children,
  style,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={[styles.text]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 4,
    paddingBottom: 8,
    fontFamily: 'Comfortaa',
    color: '#386641',
  },
});
