import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useEffect, useState ,useContext} from "react";
import './chat.css'
import Chatmessage from './chatmessage'
import AuthContext from '../context/AuthContext'
import db from './firebase'
import firebase from 'firebase'

const Chat = () => {
    const [text,setText] = useState("")
    const [messages,setMessages] = useState([])
    console.log(text)
    const authcontext = useContext(AuthContext)
    const {authstate} = authcontext
    console.log(authstate)


    useEffect(()=>{
          if(authstate.chatid){
            db.collection('chats').doc(authstate.chatid).collection('messages').
            orderBy('timestamp','desc').onSnapshot(snapshot=>(
              setMessages(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
              })))
            ))
          }
    },[authstate.chatid] )


    const onSubmit = (e)=>{
              
        e.preventDefault();

        db.collection('chats').doc(authstate.chatid).collection('messages').add({
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
               message:text,
               uid:authstate.user.uid,
               email:authstate.user.email,
               displayName:authstate.user.displayName,
                photo:authstate.user.photoURL,
        })
      setText('')
      
      
           
        
      }
    return (  
          <div className="chat">
                <div className="chat__header">
                    <h4>{authstate.chatname}</h4>
                    <strong>Details</strong>
                </div>


                <div className="chat__messages">
                  {messages.map(({id,data})=>(
                      <Chatmessage key={id} contents={data}/>
                  ))}
                    
                </div>
            <div className="chat__input">
                <form onSubmit={e=>onSubmit(e)}>
                <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
                <button type="submit">Send</button>
                </form>
                <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>

            </div>
   





          </div>



    );
}
 
export default Chat;