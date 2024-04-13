import React, { createContext, useContext } from 'react';
import { signOut as amplifySignOut } from '@aws-amplify/auth';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const signOut = async () => {
        try {
            await amplifySignOut();
            console.log("Signed out successfully.");
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    return (
        <AuthContext.Provider value={{ signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
