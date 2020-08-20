import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Grid } from './pages/Grid';
import { ItemPage } from './pages/ItemPage';
import { store } from './reduxInfo';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" children={<Grid />} />
        <Route exact path="/user/:id" children={<ItemPage />} />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
