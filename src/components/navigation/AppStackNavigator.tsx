import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import { ForgotPasswordScreen, LoginScreen, SignUpScreen } from '../../screens';
import TabNavigator from './TabNavigator';
import { AppStackNavigatorParams } from './types';

const Stack = createNativeStackNavigator<AppStackNavigatorParams>();

const AppStackNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={TabNavigator} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigator;
