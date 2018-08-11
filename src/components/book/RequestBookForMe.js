import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import { withMainComponent } from '../hoc';
import Book from './Book';

class RequestBookForMe extends Component {
  componentDidMount = () => {
    this.props.renderRequestBookForMe();
  }

  render() {
    let { requestsforme, user, handleRequestForMe } = this.props;
    let label = 'approved';
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

    if (requestsforme.length === 0) {
      return (
        <div className="md-grid">
          <h1 style={{ margin: 'auto', marginTop: 80 }}>You do not have request book for you yet!!! </h1>
        </div>
      )
    }

    return (
      <Masonry
        className="md-grid"
        style={styles.container}
        options={masonryOptions}>
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
      </Masonry>
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