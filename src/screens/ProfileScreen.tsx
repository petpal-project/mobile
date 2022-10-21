import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from '../style/theme';

const ProfileScreen: React.FC = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Text>Profile Screen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.green.dark,
  },
  container: {
    flex: 1,
    paddingHorizontal: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
