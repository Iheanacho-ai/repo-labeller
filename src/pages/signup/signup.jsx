import React from 'react';
import './signup.css'

const SignUp = ({signInWithGitHub, signout}) =>{ 
    
    return(
    <div className="signup">
        <div className="signup-form">
            <div className="form">
                <button onClick = {signInWithGitHub}> Sign in with Github</button>
                <button onClick = {signout}> Sign Out</button>

            </div>
        </div>
        <div className="signup-image"></div>
    </div>
)}

export default SignUp;