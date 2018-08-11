import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, TextField, Divider, Button } from 'react-md';

class Profile extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      state: this.props.state,
      city: this.props.city,
      fullname: this.props.fullname,
      edit: false
    }
  }
  handleEditChange(e, m) {
    const target = m.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    })
  }
  handleEditProfile(e) {
    this.setState({
      edit: true
    })
  }

  render() {
    let { changeProfile } = this.props;
    let { city, state, fullname } = this.state;
    let styles = {
      input: {
        fontSize: 16
      }
    }
    let profile = {
      fullname: fullname,
      city: city,
      state: state
    };
    return (
      <div className="md-cell md-cell--12">
        <h2 className="md-cell md-cell--12 md-text-container">
          Update Profile
        </h2>
        <div className="md-cell md-cell--12 md-text-container">
          <Card style={{ height: 260 }}>
            <form>
              <section style={{ padding: 20, paddingRight: 70 }}>
                <TextField
                  id="fullname"
                  name="fullname"
                  value={this.state.fullname}
                  placeholder='Fullname'
                  inputStyle={styles.input}
                  block paddedBlock
                  onChange={this.handleEditChange.bind(this)} />
                <Divider />
                <TextField
                  id="city"
                  name="city"
                  value={this.state.city}
                  placeholder='City'
                  inputStyle={styles.input}
                  block paddedBlock
                  onChange={this.handleEditChange.bind(this)} />
                <Divider />
                <TextField
                  id="state"
                  name="state"
                  value={this.state.state}
                  placeholder='State'
                  inputStyle={styles.input}
                  block paddedBlock
                  onChange={this.handleEditChange.bind(this)} />
                <Divider />
                <div>
                  <Button
                    id="edit"
                    raised
                    primary
                    style={{ marginTop: 15, marginRight: 15 }}
                    onClick={this.handleEditProfile.bind(this)}>Edit Profile</Button>
                  <Button
                    id="profile"
                    raised
                    primary
                    disabled={this.state.edit ? false : true}
                    style={{ marginTop: 15 }}
                    onClick={(e) => changeProfile(e, profile)}>Save Changes</Button>
                </div>
              </section>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

Profile.PropTypes = {
  handleChange: PropTypes.func.isRequired,
  changeProfile: PropTypes.func.isRequired,
  user: PropTypes.arrayOf(PropTypes.object),
  partialState: PropTypes.object
}

export default Profile;