import React from 'react'
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'
import app from '../config/firebase'


function Authentication() {
    const [auth, setAuth] = React.useState(null);

    React.useEffect(() => {
      const authInstance = getAuth(app);
      setAuth(authInstance);
    }, []);

    const loggedInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try{
        await signInWithPopup(auth, provider);
        console.log("Logged in");
      }
      catch(error){
        console.log(error);
      }
    };

    const loggedOutWithGoogle = async () => {
      try{
        await signOut(auth);
        console.log("Logged out");
      }
      catch(error){
        console.log(error);
      }
    };

    const getUserData = async () => {
      try{
        const user = auth.currentUser;
        console.log(user);
      }
      catch(error){
        console.log(error);
      }
    };


  return (
    <div className='flex gap-4 items-center justify-center'>
    <button onClick={loggedInWithGoogle}>Login with Google</button>
    <button onClick={loggedOutWithGoogle}>Logout with Google</button>
    <button onClick={getUserData}>Get User Data</button>
    </div>
  )
}

export default Authentication