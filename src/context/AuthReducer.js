import {GET_USER
,LOGOUT,
CHAT
} from '../types'

export default(state,action)=>{

     switch(action.type)
     {
         case GET_USER:
             return{
                 ...state,
                 user:action.payload
             }
          case LOGOUT:
              return{
                  ...state,
                  user:{}
              }
            case CHAT:
                return{
                    ...state,
                    chatid:action.payload.chatid,
                    chatname:action.payload.chatname,
                }
          default:
              return {
                  ...state
              }
     }



}