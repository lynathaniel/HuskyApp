import React from 'react';

// import { Header } from './Header.jsx';
import { Sidebar } from './Sidebar.jsx';

import '../index.css'

export const App = () => {
  //what content should my App look like?
  return (
    <div className='mx-auto mt-8'>
      <Sidebar/>
      <div className='header' >
        <h1 className='bouncing-texting'>ShareCampus📍</h1>
      </div>
      </div>
  );
}


export default App