import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withMainComponent } from '../hoc';
import Book from './Book';

class MyRequestBook extends Component {
  componentDidMount = () => {
    this.props.renderMyRequestBook();
  }

  render() {
    let { myrequests, books, isLoading, user, isError, requestCancel } = this.props;
    let label = 'cancel';
    let username = user.username;
    // if (isLoading) {
    // return <p>Loading...</p>
    //}
    // if (isError) {
    //return <p>Error...</p>
    // }

    return (
      <div className="md-grid">
        <div className="cards">
          {
            myrequests.map(book => {
              let props = { label, requestCancel, username, ...book }
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

MyRequestBook.PropTypes = {
  renderMyRequestBook: PropTypes.func.isRequired,
  requestCancel: PropTypes.func.isRequired,
  myrequests: PropTypes.arrayOf(PropTypes.object),
  books: PropTypes.arrayOf(PropTypes.object)
}

export default withMainComponent(MyRequestBook);