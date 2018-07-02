import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';

import { NavLink } from './drawer';
import { Home } from './home';
import { Books, AllBooks, NewBook }  from './book';
import { Settings } from './settings';
import { ProtectedRoute } from './protected';
import { Account } from './account';
import { ToolbarActions } from './toolbar';
import { hideDialog } from '../actions';

const navItems = [{
  label: 'All Books',
  to: '/allbooks',
  icon: 'home',
}, {
  label: 'Books',
  to: '/books',
  icon: 'book',
},
{
  label: 'Settings',
  to: '/settings',
  icon: 'settings',

}];

class App extends Component {

  render(){
  return (
    <div style={{ height: 480 }}>
     
      <Route
        render = {({location}) => (
      <NavigationDrawer
        drawerTitle="Book Trading App"
        toolbarTitle="Book Village"
        constantDrawerType="true"
        navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
        toolbarActions={<ToolbarActions {...location}/>}>
        
        <Switch key={location.key}>
          <Route exact path="/" location={location} component={AllBooks} />
          <ProtectedRoute path="/allbooks" location={location} component={AllBooks} />
          <ProtectedRoute path="/books" location={location} component={Books} />
          <ProtectedRoute path="/settings" location={location} component={Settings} />
          <Route path="/account/:type" location={location} component={Account} />
          <ProtectedRoute path="/newbook" location={location} component={NewBook} />
        </Switch>
    
      </NavigationDrawer>
      )} />
      
    </div>
  );
  }
}

export default App;
