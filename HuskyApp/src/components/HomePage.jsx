import React from 'react';

import { Header } from './Header.jsx';
import { History } from './History.jsx';

import '../index.css'

export const HomePage = () => {

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


export default HomePage