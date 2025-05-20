import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }; 
    const popUpSignIn = provider => {
        return signInWithPopup(auth, provider); 
    }; 
    const passwordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password); 
    }
    const userInfo = {
        createUser, 
        popUpSignIn, 
        passwordSignIn
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;