import React,{useReducer,useEffect} from 'react';
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

import {
  GET_USER,
  LOGOUT,
  CHAT       
} from '../types'
import { auth } from '../components/firebase';

const AuthState = props => {
    

         const initialstate = {
             user:{},
             chatid:null,
             chatname:null
         }
   const [state,dispatch] = useReducer(AuthReducer,initialstate)   
const signin = (user)=>{
  try {
    dispatch({
      type:GET_USER,
      payload:user
    })
 } catch (error) {
   console.log(error.message)
 }



}
     const chat = (data)=>{
       try {
            dispatch({
              type:CHAT,
              payload:data
            })
       } catch (error) {
         console.log(error.message)
       }
     }
  


     const logout = ()=>{
          try {
             dispatch({
               type:LOGOUT,
               
             })
          } catch (error) {
            console.log(error.message)
          }

     }
         
              

    


     return (

        <AuthContext.Provider
             value ={{
                 logout,
                 signin,
                 chat,
                 authstate:state
             }}
        >
          {props.children}
        </AuthContext.Provider>
     )







}
export default AuthState