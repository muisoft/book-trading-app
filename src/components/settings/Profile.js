import React from 'react'
import PropTypes from 'prop-types';
import { Card, TextField, Divider, Button } from 'react-md';

const Profile = ({handleChange, changeProfile, city, state, fullname}) => (
    <div className="md-cell md-cell--12">
        <h2 className="md-cell md-cell--12 md-text-container">
          Update Profile
        </h2>
        <div className="md-cell md-cell--12 md-text-container">
           <Card style={{height: 260}}>
          <form>
             <section style={{padding: 20, paddingRight: 70}}>
               <TextField 
               id="fullname"
               name="fullname" 
               placeholder={ fullname ? fullname : 'Fullname'} 
               block paddedBlock 
               onChange={handleChange}/>
             <Divider />
             <TextField 
               id="city" 
               name="city"
               placeholder={ city ? city : 'City'} 
               block paddedBlock 
               onChange={handleChange} />
             <Divider />
             <TextField 
               id="state"
               name="state" 
               placeholder={ state ? state : 'State'} 
               block paddedBlock 
               onChange={handleChange}/>
             <Divider />
             <Button 
               id="profile" 
               raised 
               primary 
               style={{marginTop: 15}}
               onClick={changeProfile}>Save Changes</Button>
             </section>
          </form>
          </Card>
        </div>
    </div>
)

Profile.PropTypes = {
    handleChange: PropTypes.func.isRequired,
    changeProfile: PropTypes.func.isRequired,
    user: PropTypes.arrayOf(PropTypes.object)
}
export default Profile;