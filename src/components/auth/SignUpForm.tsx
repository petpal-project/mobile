import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthContext } from '../../context';
import { ActionButton, Input } from '../ui';

const SignUpForm: React.FC = () => {
  const { signUp } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      setLoading(true);
      await signUp(email, password, firstName, lastName);
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={async ({ email, password, firstName, lastName }) =>
        await handleSignup(email, password, firstName, lastName)
      }
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.formContainer}>
          <Input
            placeholder={'First Name'}
            value={values.firstName}
            onChangeText={handleChange('firstName')}
          />
          <Input
            placeholder={'Last Name'}
            value={values.lastName}
            onChangeText={handleChange('lastName')}
          />
          <Input
            placeholder={'Email'}
            value={values.email}
            onChangeText={handleChange('email')}
          />
          <Input
            placeholder={'Password'}
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry
          />
          <Input
            placeholder={'Confirm Password'}
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            secureTextEntry
          />
          <View style={styles.break} />
          <ActionButton
            title={'Sign Up'}
            loading={loading}
            onPress={handleSubmit}
            style={styles.signUpButton}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButton: {
    marginTop: 16,
  },
  break: {
    marginVertical: 8,
    height: 1,
    width: '100%',
    backgroundColor: '#d9d9d9',
  },
});

export default SignUpForm;
