import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { withMainComponent } from '../hoc';
import Book from './Book';

class MyRequestBook extends Component {
  componentDidMount = () => {
    this.props.renderMyRequestBook();
  }

  render() {
    let { myrequests, user, requestCancel } = this.props;
    let label = 'cancel';
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

    if (myrequests.length === 0) {
      return (
        <div className="md-grid">
          <h1 style={{ margin: 'auto', marginTop: 80 }}>You do not have request book yet!!! </h1>
        </div>
      )
    }

    return (
      <Masonry
        className="md-grid"
        style={styles.container}
        options={masonryOptions}>
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
      </Masonry>
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