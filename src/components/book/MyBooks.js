import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withMainComponent } from '../hoc';
import Book from './Book';

class MyBooks extends Component {
    componentDidMount = () => {
        this.props.renderMyBooks();
    }

    render() {
        let { mybooks, deleteBook, user, isLoading, isError } = this.props;
        let label = 'delete';
        let username = user.username;
        // if (isLoading) {
        // return <p>Loading...</p>
        //}

        return (
            <div className="md-grid">
                <div className="cards">
                    {
                        mybooks.map(book => {
                            let props = { label, deleteBook, username, ...book }
                            return (
                                <Book
                                    key={book._id}
                                    { ...props}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
MyBooks.PropTypes = {
    renderMyBooks: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    mybooks: PropTypes.arrayOf(PropTypes.object)
}
export default withMainComponent(MyBooks);