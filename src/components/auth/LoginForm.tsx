import { Formik } from 'formik';
import React, { FC, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { AuthContext } from '../../context';
import { LoginNavigationProp } from '../navigation/types';
import { ActionButton, Input, TextButton } from '../ui';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Invalid email'),
  password: Yup.string().required('Required'),
});

interface Props {
  navigation: LoginNavigationProp;
}

const LoginForm: FC<Props> = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleForgotPass = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      await login(email, password);
    } catch (err) {
      console.log(err);
      setError('An error occured');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async ({ email, password }) =>
        await handleLogin(email, password)
      }
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.formContainer}>
          <Input
            placeholder={'Email'}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setShowEmailError(true)}
          />
          {errors.email && showEmailError ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}
          <Input
            placeholder={'Password'}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setShowPasswordError(true)}
            secureTextEntry
          />
          {errors.password && showPasswordError ? (
            <Text style={styles.error}>{errors.password}</Text>
          ) : null}
          <TextButton
            style={styles.forgotPassword}
            onPress={() => handleForgotPass()}
          >
            Forgot Password?
          </TextButton>
          <View style={styles.break} />
          <ActionButton
            title={'Login'}
            loading={loading}
            onPress={handleSubmit}
            style={styles.loginButton}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  formContainer: {
    paddingVertical: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  break: {
    marginVertical: 8,
    height: 1,
    width: '100%',
    backgroundColor: '#d9d9d9',
  },
  loginButton: {
    marginTop: 16,
  },
  forgotPassword: {
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  error: {
    fontFamily: 'Comfortaa',
    fontSize: 12,
    color: 'red',
    alignSelf: 'flex-start',
  },
});

export default LoginForm;
