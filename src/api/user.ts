import { AsyncReturnType } from '../utils/types';
import { client } from './client';

export const createUser = async (
  accountId: string,
  firstName: string,
  lastName: string
) => {
  return await client.mutation('user.createUser', {
    accountId,
    firstName,
    lastName,
  });
};

export const getCurrentUser = async () => {
  return await client.query('user.getCurrentUser');
};

export type User = AsyncReturnType<typeof createUser>;
