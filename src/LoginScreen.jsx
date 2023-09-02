import React,{useEffect,useState} from 'react';
import './style.css';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
     const navigate = useNavigate();
     const [authenticated, setauthenticated] =useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const handleCallbackRes = (response) => {
        var user = (jwt_decode(response.credential));
        const userDetails = {
            "name": user.name,
            "pic":user.picture
        }
        console.log(userDetails);

        setauthenticated(userDetails);
       
        localStorage.setItem("authenticated", true);
        console.log(authenticated);
        navigate('/dashboard');
    }
    
    useEffect(() => {
        /*global google */
        console.log(process.env.REACT_APP_CLIENT_ID);
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_CLIENT_ID,
            callback: handleCallbackRes
        });
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'), {
            theme: "outline", size: "large"
        }
        );  
    }, []);
    
  return (
      <>
          <div className="fullLogin">
              <div className="left">
                  Board.
              </div>
              <div className="right">
                <div className="form-head">
                  <h1>Sign In</h1>
                      Sign In To your account
                      <div id="signInDiv"></div>
                      </div>
                  <div className="form">
                      <label>E mail</label>
                      <input type="email" placeholder="abc@gmail.com" /> 
                      <label>Password</label>
                      <input type="password" /> 
                      <a href="#">Forgot Password ?</a>
                      <button> Sign In</button>

                  </div>
                  <p>Dont have an account ? <a href="#">Register Now</a></p>
              </div>
      </div>
      </>
  )
}

export default LoginScreen