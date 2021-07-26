import React,{useContext} from 'react';
import AuthContext from '../context/AuthContext'
import './login.css'
import {auth,provider} from './firebase'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const Login = () => {
    const authcontext = useContext(AuthContext)
    const {authstate} = authcontext
    console.log(authstate)

    const signin = ()=>{
        auth.signInWithRedirect(provider).catch((error)=>alert(error.message))
        
    }
  
   
    return ( 
        <div class="wrapper">
    <div class="slide a">
        <center>
      <div class="inner">
             PICK-CHAT <br/>
      <Button style={{fontSize:"50px"}} onClick={signin} variant="outlined" color="primary">
                Login
                </Button>
           
    </div>
    </center>
     
        </div>
        </div>
      
             




     );
}
 
export default Login;




