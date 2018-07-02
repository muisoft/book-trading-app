import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';

const navItems3 = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'All Books',
  to: '/allbooks',
  icon: 'book',
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
const navItems2 = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}];
class DrawerLabel extends PureComponent {
  // console.log('Label Yewo: '+JSON.stringify(navItems.to));
     
    render(){
        let {navItems, user} = this.props;
        const renderLabel = () => {
        if(user.length > 0) {
            return navItems;
        }
         return navItems;
    }
       
    return(
        <div>
            {
                //renderLabel().map(navItem => <NavLink {...navItem} key={navItem.to} /> )
            }
        </div>
    )
    }
}

export default connect(({ book }) => {
    return {
        user: book.message
    }
})(DrawerLabel);