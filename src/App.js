
// Import from React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Router, Switch, Route } from 'react-router-dom';

// Imports from files
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

// Imports from material-ui

function App() {

  return (
    //BEM Naming Convention
    <div className="app">
      {/* <h1>Building WhatsApp Clone with React Js</h1> */}

      <div className="app__body">

        <Router>

          {/* SideBar */}
          <Sidebar />

          {/* Switch between chats */}
          <Switch>

            {/* Features of rooms chats, about URL */}
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>

            <Route path="/">
              <Chat />
            </Route>

          </Switch>

        </Router>

      </div>

    </div>
  );

}

export default App;
