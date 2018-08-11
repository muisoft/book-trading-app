import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { withMainComponent } from '../hoc';
import Book from './Book';

class MyBooks extends Component {
    componentDidMount = () => {
        this.props.renderMyBooks();
    }

    render() {
        let { mybooks, deleteBook, user } = this.props;
        let label = 'delete';
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

        if (mybooks.length === 0) {
            return (
                <div className="md-grid">
                    <h1 style={{ margin: 'auto', marginTop: 80 }}>You do not add book yet!!! </h1>
                </div>
            )
        }
        return (
            <Masonry
                className="md-grid"
                style={styles.container}
                options={masonryOptions}>
                {
                    mybooks.map(book => {
                        let props = { label, deleteBook, username, ...book }
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
MyBooks.PropTypes = {
    renderMyBooks: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    mybooks: PropTypes.arrayOf(PropTypes.object)
}
export default withMainComponent(MyBooks);