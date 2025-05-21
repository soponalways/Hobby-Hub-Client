import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null); 
    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }; 
    const popUpSignIn = provider => {
        return signInWithPopup(auth, provider); 
    }; 
    const passwordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password); 
    }; 
    const logoutUser = () => {
        return signOut(auth); 
    }
    const userInfo = {
        setUser,
        user,
        createUser, 
        popUpSignIn, 
        passwordSignIn, 
        logoutUser, 
    }; 

    // Handle Side Effect 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, savedUser => {
            if(savedUser) {
                // Get User From Database
                fetch(`http://localhost:5000/user/${savedUser.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setUser(data)
                    })
            }
        }); 
        return () => {
            unSubscribe(); 
            console.log("un mount the user")
        }
    }, [])
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;