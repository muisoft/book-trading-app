import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

import { withMainComponent } from '../hoc';

const NavLink = ({ label, to, exact, icon, user }) => (
  <Route path={to} exact={exact}>

    {({ match }) => {
      let leftIcon;
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>;
      }

      return (
        <ListItem
          component={RouterLink}
          active={!!match}
          to={to}
          primaryText={user.username || label === 'All Books' ? label : ''}
          leftIcon={user.username || label === 'All Books' ? leftIcon : ''}
        />
      );
    }}
  </Route>
);

NavLink.PropTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  exact: PropTypes.string,
  icon: PropTypes.string,
  user: PropTypes.object.isRequired
}
export default withMainComponent(NavLink);

