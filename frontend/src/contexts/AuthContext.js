import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage on mount
    const savedUser = localStorage.getItem('amazonUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Save user to localStorage whenever it changes
    if (user) {
      localStorage.setItem('amazonUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('amazonUser');
    }
  }, [user]);

  const signIn = (email, password) => {
    // Mock sign in - in real app, this would make API call
    const mockUser = {
      id: 1,
      name: email.split('@')[0],
      email,
      isSignedIn: true,
      addresses: [],
      orders: []
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const signUp = (name, email, password) => {
    // Mock sign up - in real app, this would make API call
    const mockUser = {
      id: Date.now(),
      name,
      email,
      isSignedIn: true,
      addresses: [],
      orders: []
    };
    setUser(mockUser);
    return Promise.resolve(mockUser);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('amazonUser');
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      signUp,
      signOut,
      isSignedIn: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};