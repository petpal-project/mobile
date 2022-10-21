import { auth } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createUser } from './user';

export const loginEmail = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const registerEmail = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const creds = await createUserWithEmailAndPassword(auth, email, password);
  return await createUser(creds.user.uid, firstName, lastName);
};

export const sendPasswordReset = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

export const logoutUser = async () => await signOut(auth);
