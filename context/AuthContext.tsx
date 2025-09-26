"use client";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the shape of the authentication context
export type AuthContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isAuthenticated: boolean;
  // login: (user: any) => void;
  // logout: () => void;
  userLoggedIn: boolean;
  loading: boolean;
};

// Create the context with a typed default of undefined for safety
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Provider to wrap parts of the app that need auth state
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(() => {
    // used for clear up
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: any) {
    if (user) {
      setUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }
  // const login = (u: any) => setUser(u);
  // const logout = () => setUser(null);
// console.log(user)
  const value: AuthContextType = {
    user,
    setUser,
    isAuthenticated: Boolean(user),
    // login,
    // logout,
    userLoggedIn,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook to consume the auth context
export default function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
