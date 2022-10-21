import { AsyncReturnType } from '../utils/types';
import { client } from './client';

export const getCatBreeds = async () => {
  return client.query('cats.listBreeds');
};

export type CatBreeds = AsyncReturnType<typeof getCatBreeds>;
