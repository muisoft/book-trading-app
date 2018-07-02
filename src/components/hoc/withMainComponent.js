import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';

import { mapStateToProps, mapDispatchToProps } from './utils/reducer';
import { actionsWrapper } from './utils/actionsWrapper';

//import { signin, signup, onRate, resetAll, getPics, getMyPics, deletePics, showDialog, addNewPics } from '../actions';

export const withMainComponent = function (ChildComponent) {
    class WithMainComponent extends Component {
           render(){
            let actionsProps = actionsWrapper({...this.props});   
            let childProps = { ...this.props, ...actionsProps };
            return (
                <ChildComponent {...childProps} />
            );
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(WithMainComponent);

}
export default withMainComponent;