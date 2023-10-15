import React from 'react';

import { Header } from './Header.jsx';
import { History } from './Nav.jsx';
import { Chat } from './Chat.jsx';
function App() {

  //what content should my App look like?
  return (
    <div className='app-container'>
      <Header />
      <div className="main-content">
        <div className='nav-container'>
        <Chat />
        </div>
        <div className='chat-pane'>
        <History />
        </div>
      </div>
    </div>
  );
}


export default App
