"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Check if user data exists in localStorage
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(checkAuth);
  }, []);

  useEffect(() => {
    // Save user data to localStorage when it changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (userData) => {
    // In a real app, you would validate credentials with your backend
    setUser(userData);
    return true;
  };

  const register = (userData) => {
    // In a real app, you would send registration data to your backend
    setUser(userData);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
