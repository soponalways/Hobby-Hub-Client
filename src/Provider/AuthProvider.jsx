import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }; 
    const popUpSignIn = provider => {
        return signInWithPopup(auth, provider); 
    }
    const userInfo = {
        createUser, 
        popUpSignIn
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;