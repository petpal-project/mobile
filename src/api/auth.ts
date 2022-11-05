import auth from '@react-native-firebase/auth';
import { createUser } from './user';

export const loginEmail = async (email: string, password: string) => {
  await auth().signInWithEmailAndPassword(email, password);
};

export const registerEmail = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const creds = await auth().createUserWithEmailAndPassword(email, password);
  return await createUser(creds.user.uid, firstName, lastName);
};

export const sendPasswordReset = async (email: string) => {
  await auth().sendPasswordResetEmail(email);
};

export const logoutUser = async () => await auth().signOut();
