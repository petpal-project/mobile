import axios from 'axios';
import { AsyncReturnType } from '../utils/types';
import { apiClient } from './client';

export const createUser = async (
  accountId: string,
  firstName: string,
  lastName: string
) => {
  try {
    const response = await apiClient.post('/users', {
      firstName,
      lastName,
      accountId,
    });
    console.log(response);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log('createUser error: ', err.message);
    } else {
      console.log('createUser error: ', err);
    }
  }
};

export const getUser = async () => {
  try {
    const user = await apiClient.get('/users');
    if (user) {
      console.log(user);
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log('getUser error: ', JSON.stringify(err.toJSON(), null, 2));
    } else {
      console.log('createUser error: ', err);
    }
  }
};
