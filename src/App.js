import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={ Login } exact path="/" />
        <Route component={ Wallet } path="/carteira" />
      </Switch>
    );
  }
}
export default App;
