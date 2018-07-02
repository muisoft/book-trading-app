import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import { withMainComponent } from '../hoc';

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => (
        rest.user.username 
         ? <Component {...props} />
         : <Redirect to={{
             pathname: '/account/login',
             state: { from: props.loaction }
          }}/> 
    )}/>
)

export default withMainComponent(ProtectedRoute);