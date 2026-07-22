import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for an existing session
    const storedUser = localStorage.getItem('starGrowthHub_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email) => {
    // In a real app, this would verify passwords against a DB.
    // For this mock, we just retrieve the user if they exist, or create a basic session.
    const mockUser = {
      email,
      name: email.split('@')[0], // Generate a fake name from email
      token: 'mock-jwt-token-12345'
    };
    setCurrentUser(mockUser);
    localStorage.setItem('starGrowthHub_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const signup = (userData) => {
    // userData contains { name, email, phone, company }
    const newUser = {
      ...userData,
      token: 'mock-jwt-token-67890'
    };
    setCurrentUser(newUser);
    localStorage.setItem('starGrowthHub_user', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('starGrowthHub_user');
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
