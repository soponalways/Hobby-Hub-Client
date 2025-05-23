import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null); 
    const [loading , setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }; 
    const popUpSignIn = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider); 
    }; 
    const passwordSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password); 
    }; 
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth); 
    }
    const userInfo = {
        setUser,
        user,
        createUser, 
        popUpSignIn, 
        passwordSignIn, 
        logoutUser, 
        setLoading, 
        loading

    }; 

    // Handle Side Effect 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, savedUser => {
            setLoading(false); 
            setUser(savedUser)
            if(savedUser) {
                // Get User From Database
                fetch(`https://hobby-hub-chi.vercel.app/user/${savedUser.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setUser(data)
                    })
            }
        }); 
        return () => {
            unSubscribe(); 
            setUser(null)
        }
    }, [])
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;