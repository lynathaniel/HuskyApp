import React from 'react';

import { Header } from './Header.jsx';
import { History } from './Nav.jsx';
//import { ChatPane } from './ChatPane.js';
function App() {

  //what content should my App look like?
  return (
    <div className='app-container'>
      <Header />
      <div className="main-content">
        <div className='nav-container'>
          <History />
        </div>
        <div className='chat-pane'>
          {/* <ChatPane /> */}
        </div>
      </div>
    </div>
  );
}


export default App
