

// Import from React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Router, Switch, Route } from 'react-router-dom';

// Imports from files
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './StateProvider.js';

// Imports from material-ui

function App() {

  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM Naming Convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
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
        )
      }

    </div>
  );

}

export default App;
