import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExpoDefault, MyPetsScreen, ProfileScreen } from '../../screens';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="My Pets" component={MyPetsScreen} />
      <Tab.Screen name="Main" component={ExpoDefault} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
