
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import app from '../config/firebase';

const Authentication = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const authInstance = getAuth(app);
        setAuth(authInstance);
    }, []);

    const loggedInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log("Logged in");
        } catch (error) {
            console.log(error);
        }
    };

    const loggedOutWithGoogle = async () => {
        try {
            await signOut(auth);
            console.log("Logged out");
        } catch (error) {
            console.log(error);
        }
    };

    const getUserData = async () => {
        try {
            const user = auth.currentUser;
            return user;
        } catch (error) {
            console.log(error);
        }
    };

    return { loggedInWithGoogle, loggedOutWithGoogle, getUserData };
};

export default Authentication;
