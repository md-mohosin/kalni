import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)



    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            return unsubScribe
        }
    }, [])


    const authInfo = {
        user, setUser,
        signIn,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;