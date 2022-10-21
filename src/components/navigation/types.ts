import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppStackNavigatorParams = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type LoginNavigationProp = NativeStackNavigationProp<
  AppStackNavigatorParams,
  'SignUp'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AppStackNavigatorParams,
  'Login'
>;
