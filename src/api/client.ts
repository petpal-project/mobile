import axios from 'axios';
import { auth } from '../config/firebase';
import Constants from 'expo-constants';

export const apiClient = axios.create({
  baseURL: Constants.expoConfig?.extra?.apiBaseURL,
  timeout: 3000,
});

apiClient.interceptors.request.use(async (config) => {
  const token = await auth.currentUser?.getIdToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: token,
    };
  }
  return config;
});
