import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Routing } from 'router';

import UsersList from './UsersList/UsersList';
import CreateUser from './CreateUser/CreateUser';
import UpdateUser from './UpdateUser/UpdateUser';

const Users = () => (
  <Switch>
    <Route path={Routing.NewUser} exact component={CreateUser} />
    <Route path={Routing.Users} exact component={UsersList} />
    <Route path={Routing.UpdateUser} exact component={UpdateUser} />
  </Switch>
);

export default Users;
