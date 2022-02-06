import React, { useEffect, useState } from 'react';
import { auth,  provider } from './firebase.utils';
import {  signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signup/signup.jsx';
import Explore from './pages/explore/explore';
import './App.css';

const App= () => {
  const [user, setUser] = useState()
  const [token, setToken] = useState()

  useEffect(() => {
      console.log(user, token)
  }, [user, token])

  const signInWithGitHub = () => { 
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        setToken(credential.accessToken);
    
        // The signed-in user info.
        setUser(result.user);
    
        console.log(user, token);
        
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
    
        console.log(errorCode, errorMessage, 'error in sign in');
      })
    
      console.log(user, token);
    };

    const signout = signOut(auth).then(() => {
      setUser(null);
      setToken(null)
      console.log('sign out successful')
    }).catch((error) => {
      // An error happened.
      console.log(error, 'error in sign out')
    })

  return (
    <div className="App">
     
    <Route exact path  = '/' />
    {
      user? ( <Navigate to = '/explore' /> ):
      <SignUp signInWithGitHub = {signInWithGitHub} signout= {signout}/>
    }
    <Route exact path = '/explore ' component = {Explore}/>

    </div>
  );
}

export default App;
