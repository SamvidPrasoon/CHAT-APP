import React,{useEffect,useState,useContext} from 'react';
import { Avatar } from "@material-ui/core";
import AuthContext from '../context/AuthContext'
import db from './firebase'
import "./sidebarchat.css";
const Sidebarchat = ({id,chatName}) => {
    const authcontext = useContext(AuthContext)
    const {authstate,chat} = authcontext
    const [chatInfo,setChatInfo] = useState([])
    console.log(authstate)
    const data = {};
    data.chatid = id
    data.chatname = chatName
    const send = ()=>{
        chat(data)
     }
       useEffect(()=>{
             db.collection('chats')
             .doc(id)
             .collection('messages')
             .orderBy("timestamp","desc")
             .onSnapshot((snapshot)=>(
             setChatInfo(snapshot.docs.map((doc)=>doc.data()))
             ))
       },[id])




    return ( 
            <div onClick={send} className="sidebarChat">
               <Avatar src={chatInfo[0]?.photo}/>
               <div className="sidebar__info">
                   <h3>{chatName}</h3>
                   <p>{chatInfo[0]?.message}</p>
                   <small>{new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}</small>
               </div> 
            </div>

     );
}
 
export default Sidebarchat;