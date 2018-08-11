import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Book from './Book';
import { withMainComponent } from '../hoc';

class AllBooks extends Component {
  componentDidMount = () => {
    this.props.renderAllBooks();
  }
  render() {
    let { books, handleRequest, user } = this.props;
    let label = 'request';
    let username = user.username;
    let userId = user._id;

    const masonryOptions = {
      transitionDuration: '0.6s',
      fitWidth: true,
      gutter: 5
    }
    const styles = {
      container: {
        marginTop: 80
      }
    }
    return (
      <Masonry
        className="md-grid"
        style={styles.container}
        options={masonryOptions}>
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
      </Masonry>
    )
  }
}

AllBooks.PropTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  handleRequest: PropTypes.func,
  renderAllBooks: PropTypes.func
}

export default withMainComponent(AllBooks);