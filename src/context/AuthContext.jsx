import React, { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // email signup
  const signup = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // email login
  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const loginWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  // logout
  const logout = async () => {
    return await signOut(auth);
  };

  // reset password
  const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };