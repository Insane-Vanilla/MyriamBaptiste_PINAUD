import React, {createContext, useContext, useState, useEffect} from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase';

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});
  
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut(email, password) {
    return signOut(auth);
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn, logOut}}>{children} </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}



