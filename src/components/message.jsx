import React,{useContext,useEffect} from 'react';
import Sidebar from './sidebar'
import Chat from './chat'
import Login from './login'
import AuthContext from '../context/AuthContext'
import './message.css'
import {auth,provider} from './firebase'

const Message = () => {
    const authcontext = useContext(AuthContext)
    const {authstate,signin} = authcontext
    console.log(authstate)
    useEffect(()=>{
        
          auth.onAuthStateChanged((user)=>{
                  signin(user)
    
          })
              
       
           
       },[])
    return ( 
        <div className="message">
            {authstate.user && authstate.user.emailVerified==true ? (
                <React.Fragment>
                <Sidebar/>
                <Chat/>
                </React.Fragment>
            ):(
                <Login/>
            )}
               
        </div>
     );
}
 
export default Message;