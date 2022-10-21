import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { colors } from '../style/theme';
import { LoginForm } from '../components/auth';
import { RoundBox, TextButton } from '../components/ui';
import { useNavigation } from '@react-navigation/native';
import { LoginNavigationProp } from '../components/navigation/types';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>petPal</Text>
      </View>
      <RoundBox style={styles.loginContainer}>
        <LoginForm navigation={navigation} />
        <TextButton onPress={handleSignUp} style={styles.signUp}>
          Create an account
        </TextButton>
      </RoundBox>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green.dark,
    paddingHorizontal: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    padding: 32,
  },
  titleText: {
    fontFamily: 'Fredoka One',
    fontWeight: '300',
    fontSize: 64,
    color: 'white',
  },
  signUp: {
    marginTop: 8,
    alignSelf: 'center',
  },
  loginContainer: {
    width: '100%',
    flexDirection: 'column',
  },
});

export default LoginScreen;
