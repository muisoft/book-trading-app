import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

import { withMainComponent } from '../hoc';
import { AccountMenu } from '../account';

const ToolbarActions = ({ gotoLogin, gotoNewBook, pathname, user }) => {
    const actions = () => {
        if (user.username) {
            if (pathname === '/books') {
                return (
                    <div>
                        <Button icon onClick={gotoNewBook}>add</Button>
                        <AccountMenu
                            simplifiedMenu
                            username={user.username} />
                    </div>
                )
            }
            return (
                <AccountMenu
                    simplifiedMenu
                    username={user.username} />
            )
        } else {
            return (
                <Button icon onClick={gotoLogin}>account_circle</Button>
            )
        }
    }
    return (
        <div style={{ lineHeight: 3, fontSize: 18 }}>
            {actions()}
        </div>
    )
}

ToolbarActions.PropTypes = {
    gotoLogin: PropTypes.func.isRequired,
    gotoNewBook: PropTypes.func.isRequired,
    pathname: PropTypes.string,
    user: PropTypes.object
}
export default withMainComponent(ToolbarActions);