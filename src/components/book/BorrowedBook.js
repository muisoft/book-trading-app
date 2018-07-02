import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withMainComponent } from '../hoc';

import Book from './Book';

class BorrowedBook extends Component {
  componentDidMount = () => {
    this.props.renderBorrowedBooks();
  }
  
  render() {
    let { books, borrowedbooks, isLoading, user, isError, returnBorrowedBook } = this.props;
    let label = 'return';
    let username = user.username;
    //if (isLoading) {
     //return <p>Loading...</p>
  //  }
     //if (isError) {
    // return <p>Error...</p>
   // }  
    return (
       <div className="md-grid">
        <div className="cards">
          {
            borrowedbooks.map(book => {
              let props = { label, returnBorrowedBook, username, ...book }
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

BorrowedBook.PropTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  borrowedbooks: PropTypes.arrayOf(PropTypes.object),
  renderBorrowedBooks: PropTypes.func.isRequired,
  returnBorrowedBook: PropTypes.func.isRequired
}

export default withMainComponent(BorrowedBook);