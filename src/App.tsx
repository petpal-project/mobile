import { useCallback, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppStackNavigator from './components/navigation/AppStackNavigator';
import { AuthContext } from './context';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const { initialUserLoad } = useContext(AuthContext);

  useEffect(() => {
    async function prepare() {
      try {
        const loadFonts = Font.loadAsync({
          Comfortaa: require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
          'Fredoka One': require('./assets/fonts/FredokaOne-Regular.ttf'),
        });
        await Promise.all([loadFonts]);
      } catch (err) {
        console.log(err);
      } finally {
        setAppReady(true);
      }
    }
    prepare();
  }, []);

  // TODO: Fix splashscreen error: WARN  No native splash screen registered for given view controller. Call 'SplashScreen.show' for given view controller first.

  const onLayoutRootView = useCallback(async () => {
    if (appReady && initialUserLoad) {
      await SplashScreen.hideAsync();
    }
  }, [appReady, initialUserLoad]);

  if (!appReady || !initialUserLoad) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppStackNavigator />
    </View>
  );
}
