import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



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
           return setLoading(false)
        })
        return () => {
            return unsubScribe()
        }
    }, [])


    const authInfo = {
        user, setUser,
        googleLogin,
        signIn,
        login,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;