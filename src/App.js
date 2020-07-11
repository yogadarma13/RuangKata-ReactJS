import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import UpdatePost from './pages/UpdatePost';

// Pada App.js ini menggunakan class Component yang berisikan Route setiap page
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Route yang pertama kali dijalankan yaitu page Home */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Route untuk menuju page AddPost */}
          <Route exact path="/add">
            <AddPost />
          </Route>
          {/* Route untuk menuju page UpdatePost */}
          <Route exact path="/update">
            <UpdatePost />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
