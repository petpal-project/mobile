import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ForgotPasswordForm } from '../components/auth';
import { SignUpNavigationProp } from '../components/navigation/types';
import { RoundBox, TextButton } from '../components/ui';
import { colors } from '../style/theme';

const ForgotPasswordScreen: FC = () => {
  const navigation = useNavigation<SignUpNavigationProp>();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <RoundBox style={styles.signUpContainer}>
        <ForgotPasswordForm />
        <TextButton
          onPress={() => navigation.goBack()}
          style={styles.cancelText}
        >
          Cancel
        </TextButton>
      </RoundBox>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green.dark1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '15%',
  },
  signUpContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  cancelText: {
    marginTop: 8,
    alignSelf: 'center',
  },
});

export default ForgotPasswordScreen;
