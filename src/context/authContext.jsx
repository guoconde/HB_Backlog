import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const LOCAL_TOKEN = 'token';
const persistedToken = localStorage.getItem(LOCAL_TOKEN);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(persistedToken);

  function signIn(newToken) {
    setToken(newToken);
    localStorage.setItem(LOCAL_TOKEN, newToken);
  }

  function signOut() {
    setToken(null);
    localStorage.removeItem(LOCAL_TOKEN);
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
