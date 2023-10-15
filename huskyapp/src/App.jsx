import React from 'react';

import { Header } from './Header.jsx';
import { History } from './Nav.jsx';
//import { ChatPane } from './ChatPane.js';
function App() {

  //what content should my App look like?
  return (
    <div>
      <Header />
      <div className="row flex-grow-1">
        <div>
          <History />
        </div>
        <div>
          {/* <ChatPane /> */}
        </div>
      </div>
    </div>
  );
}


export default App
