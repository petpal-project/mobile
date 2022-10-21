import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { sendPasswordReset } from '../../api/auth';
import { ActionButton, Input } from '../ui';

const ForgotPasswordForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendEmail = async (email: string) => {
    try {
      setLoading(true);
      await sendPasswordReset(email);
    } catch (err) {
      setError('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        emailConfirmation: '',
      }}
      onSubmit={async ({ email, emailConfirmation }) => {
        await handleSendEmail(email);
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.formContainer}>
          <Input
            placeholder={'Email'}
            value={values.email}
            onChangeText={handleChange('email')}
          />
          <Input
            placeholder={'Confirm email'}
            value={values.emailConfirmation}
            onChangeText={handleChange('emailConfirmation')}
          />
          <View style={styles.break} />
          <ActionButton
            title={'Send'}
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

export default ForgotPasswordForm;
