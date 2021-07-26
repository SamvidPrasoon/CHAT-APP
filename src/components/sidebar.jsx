import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState ,useContext} from "react";
import AuthContext from '../context/AuthContext'
import "./sidebar.css";
import Sidebarchat from './sidebarchat'
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import { Redirect } from "react-router";
import db, {auth,provider} from './firebase'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
const Sidebar = () => {
  const authcontext  = useContext(AuthContext)
  const {authstate} = authcontext
 const [chats,setChats] = useState([])

 useEffect(()=>{
      db.collection('chats').onSnapshot(snapshot=>(
        setChats(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        })))
      ))
 },[])

  const addChat = ()=>{
    const chatName = prompt("Please Enter A Chat name")
    if(chatName){
      db.collection('chats').add({
        chatName:chatName
      })
    }
   
  }


  const logout= async()=>{
    await auth.signOut()
     
 }
    return (  
     
        <div className="sidebar">
        <div className="sidebar__header">
          <MeetingRoomIcon
           onClick={logout}
           className="sidebar__avatar"
          />
          <div className="sidebar__input">
            <SearchIcon />
            <input placeholder="Search" />
          </div>
  
          <IconButton variant="outlined" className="sidebar__inputButton">
            <RateReviewOutlinedIcon onClick={addChat}/>
          </IconButton>
        </div>
        <div className="sidebar__chats">

          {chats.map(({id,data:{chatName}})=>(
                   <Sidebarchat key={id} id={id} chatName={chatName}/>
          ))}
          
          
          
        </div>
            </div>
      



    );
}
 
export default Sidebar;