import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import SignIn from './Pages/Account/SignIn/index';
import SignUp from './Pages/Account/SignUp/index';
import Feed from './Pages/Feed/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn}/>
        <Route path='/register' component={SignUp}/>
        <Route path='/feed' component={Feed}/>
      </Switch>
    </BrowserRouter>
  )
};