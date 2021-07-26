import React ,{useContext}from 'react';
import AuthContext from '../context/AuthContext'
import './chatmessage.css'
import { Avatar, IconButton } from "@material-ui/core";
const Chatmessage = ({id,contents:{message,displayName,photo,email}}) => {
    
    const authcontext = useContext(AuthContext)
    const {authstate} = authcontext
    
    
    
    return ( 
        <div className={`message ${authstate.user.email === email && "message__sender" }`}>
            <Avatar className="message__photo" src={photo}/>
            <p>{message}</p>
            
              
        </div>
     );
}
 
export default Chatmessage;