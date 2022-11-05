import { createContext, FC, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../config/firebase';
import { loginEmail, logoutUser, registerEmail } from '../api/auth';

interface AuthContextType {
  user?: User | null;
  initialUserLoad: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [initialUserLoad, setInitialUserLoad] = useState(false);

  useEffect(() => {
    const getToken = async (user: User | null) => {
      const token = await user?.getIdToken();
      console.log('Token ', token);
    };
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setInitialUserLoad(true);
      getToken(user);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await loginEmail(email, password);
  };

  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    await registerEmail(email, password, firstName, lastName);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.log(err);
    }
  };

  const memoizedValue = useMemo(
    () => ({
      user,
      initialUserLoad,
      login,
      signUp,
      logout,
    }),
    [user, initialUserLoad]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};
