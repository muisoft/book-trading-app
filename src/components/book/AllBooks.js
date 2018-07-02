import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-md';

import Book from './Book';
import { withMainComponent, withResponsive } from '../hoc';

class AllBooks extends Component {
  componentDidMount = () => {
      this.props.renderAllBooks();
  }
  render() {
    let { books, handleRequest, user, columnCount, width, isLoading, isError } = this.props;
    let label = 'request';
    let username = user.username;
    let userId = user._id;
   /** if (isLoading) {
     return <p>Loading...</p>
    }
     if (isError) {
     return <p>Error...</p>
    }**/
         
    return (
      <div className="md-grid">
        <div className="cards">
          {
            books.map(book => {
              let props = { label, username, userId, handleRequest, ...book }
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

AllBooks.PropTypes = {
   books: PropTypes.arrayOf(PropTypes.object),
   handleRequest: PropTypes.func,
   renderAllBooks: PropTypes.func
}

export default withMainComponent(withResponsive(AllBooks));