import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, signOut as amplifySignOut } from '@aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const checkUser = async () => {
        try {
            const userData = await getCurrentUser();
            if (userData) {
                setUser(userData); // Set user if successfully retrieved
                console.log('User data retrieved:', userData);
            } else {
                console.log('No user signed in');
                setUser(null); // Clear user if no user data
            }
        } catch (error) {
            console.log('Failed to retrieve user:', error);
            setUser(null);
        }
    };


    useEffect(() => {
        checkUser();
    }, []);

    const signOut = async () => {
        try {
            await amplifySignOut();
            setUser(null); // Ensure user state is cleared on sign out
            console.log("Signed out successfully.");
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
