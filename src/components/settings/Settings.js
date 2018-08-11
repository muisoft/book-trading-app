import React from 'react';
import PropTypes from 'prop-types';

import { withMainComponent } from '../hoc';

import Profile from './Profile';
import Password from './Password';

const Settings = ({user, changeProfile, partialState, changePassword, handleChange}) =>{
   const profileProps = {
     fullname: user.fullname,
     city: user.city,
     state: user.state,
     changeProfile: changeProfile,
     handleChange: handleChange,
     partialState: partialState
   }
   const passwordProps = {
     changePassword: changePassword,
     handleChange: handleChange
   }
    return (
      <div className="md-grid">
        <Profile {...profileProps} />
        <Password {...passwordProps} />
      </div>
    );
  
}

Settings.PropTypes = {
  changeProfile: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  message: PropTypes.object
}

export default withMainComponent(Settings);