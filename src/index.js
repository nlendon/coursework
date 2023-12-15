import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from 'react-router-dom/es/Route';
import NotFound from './pages/NotFound';
import './styles/main.scss';
import Auth from './pages/Auth';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/sign-in' component={Auth} />
      <Route path={'*'} component={NotFound} />
    </Switch>
  </BrowserRouter>,
);
reportWebVitals();
