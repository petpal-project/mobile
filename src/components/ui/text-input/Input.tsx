import React, { FC } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const Input: FC<TextInputProps> = ({
  autoCapitalize,
  value,
  onChangeText,
  placeholder,
  style,
  onBlur,
  secureTextEntry,
}) => {
  return (
    <TextInput
      autoCapitalize={autoCapitalize ?? 'none'}
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      placeholder={placeholder ?? ''}
      secureTextEntry={secureTextEntry ?? false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 48,
    width: '100%',
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d9d9d9',
    padding: 10,
    fontFamily: 'Comfortaa',
  },
});

export default Input;
