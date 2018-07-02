import React from 'react';
import PropTypes from 'prop-types';
import { Card, TextField, Divider, Button } from 'react-md';

const Password = ({handleChange, changePassword}) => (
    <div className="md-cell md-cell--12">
        <h2 className="md-cell md-cell--12 md-text-container">
          Change Password
        </h2>
        <div className="md-cell md-cell--12 md-text-container">
           <Card style={{height: 200}}>
          <form>
            <section style={{padding: 20, paddingRight: 70}}>
             <TextField 
               id="newPassword" 
               name="newPassword"
               placeholder="New Password" 
               block paddedBlock 
               onChange={handleChange} />
             <Divider />
             <TextField 
                id="newPassword2" 
                name="newPassword2"
                placeholder="Re-Enter Password" 
                block paddedBlock 
                onChange={handleChange}/>
             <Divider />
             <Button 
               id="password" 
               raised 
               primary style={{marginTop: 15}}
               onClick={changePassword}> Save Changes</Button>
            </section> 
          </form>
          </Card>
        </div>
    </div>
)

Password.PropTypes = {
    handleChange: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired
}
export default Password;