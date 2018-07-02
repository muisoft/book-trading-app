import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withMainComponent } from '../hoc';
import Book from './Book';

class RequestBookForMe extends Component {
  componentDidMount = () => {
    this.props.renderRequestBookForMe();
  }

  render() {
    let { requestsforme, books, user, isLoading, isError, handleRequestForMe } = this.props;
    let label = 'approved';
    let username = user.username;
    // if (isLoading) {
    //return <p>Loading...</p>
    // }
    //if (isError) {
    //return <p>Error...</p>
    // }
    return (
       <div className="md-grid">
      <div className="cards">
        {
          requestsforme.map(book => {
            let props = { label, handleRequestForMe, username, ...book }
            return (
              <Book
                key={book._id}
                {...props}
              />
            )
          })
        }
      </div>
      </div>
    )
  }
}
RequestBookForMe.PropTypes = {
  renderRequestBookForMe: PropTypes.func.isRequired,
  handleRequestForme: PropTypes.func.isRequired,
  requestsforme: PropTypes.arrayOf(PropTypes.object),
  books: PropTypes.arrayOf(PropTypes.object)
}
export default withMainComponent(RequestBookForMe);