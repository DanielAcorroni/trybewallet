import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={ Login } exact path="/" />
      </Switch>
    );
  }
}
export default App;
