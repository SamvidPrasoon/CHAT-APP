import React from 'react';
import './App.css';
import Message from './components/message'
import Login from './components/login'
import AuthState from './context/AuthState'

function App() {
  return (
    <AuthState>
    <div className="imessage">
  
            <Message/>
           
     
           
    </div>
    </AuthState>
  );
}

export default App;
