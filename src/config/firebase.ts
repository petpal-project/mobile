import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';

export const app = initializeApp({
  apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
});

export const auth = getAuth(app);
