import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {

  return (
    //BEM Naming Convention
    <div className="app">
      {/* <h1>Building WhatsApp Clone with React Js</h1> */}

      <div className="app__body">
        {/* SideBar */}
        <Sidebar />

        {/* ChatPanel */}
        {/* <Chat /> */}

      </div>

    </div>
  );

}

export default App;
