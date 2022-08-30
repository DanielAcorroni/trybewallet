import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route component={ Login } exact path="/" />
          <Route component={ Wallet } path="/carteira" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
