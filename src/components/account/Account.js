import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card } from 'react-md';
import { withMainComponent, withResponsive } from '../hoc';

import 'font-awesome/css/font-awesome.min.css';
import '../style/styles.css';

import Login from './Login';
import Signup from './Signup';

const Account = ({ match, user, location}) => {

    if (user.username) {
        return <Redirect to={{ pathname: "/allbooks" }} />
    }
    return (
        <div className="md-grid ">
            
            <Card style={{height: 470, paddingTop: 15}} className="md-cell md-cell--7 md-cell--7-phone md-text-container">
                <h2 className="message">Hello! Welcome to Book Village</h2>
                {
                    match.params.type === 'signup' ? <Signup /> : <Login {...this.props} />
                }
            </Card>
        </div>
    )

}
Account.PropTypes = {
    match: PropTypes.object,
    user: PropTypes.object
}
export default withMainComponent(withResponsive(Account));
