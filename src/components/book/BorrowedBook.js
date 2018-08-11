import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import { withMainComponent } from '../hoc';

import Book from './Book';

class BorrowedBook extends Component {
  componentDidMount = () => {
    this.props.renderBorrowedBooks();
  }

  render() {
    let { borrowedbooks, user, returnBorrowedBook } = this.props;
    let label = 'return';
    let username = user.username;

    const styles = {
      container: {
        marginTop: 20
      }
    }
    const masonryOptions = {
      transitionDuration: '0.6s',
      fitWidth: true,
      gutter: 5
    }

    if (borrowedbooks.length === 0) {
      return (
        <div className="md-grid">
          <h1 style={{ margin: 'auto', marginTop: 80 }}>You do not have borrow book yet!!! </h1>
        </div>
      )
    }

    return (
      <Masonry
        className="md-grid"
        style={styles.container}
        options={masonryOptions}>
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
      </Masonry>
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