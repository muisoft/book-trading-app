import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-md';

const Book = ({ title, _id, url, author, request, requestBy, userId, approved, username, owner, label,
    handleRequestForMe, returnBorrowedBook, requestCancel, handleRequest, deleteBook }) => {

    const args = {
        id: _id,
        to: owner,
        request: request,
        approved: approved,
        requestBy: requestBy
    }

    const styles = {
        button: {
            width: '100%',
            height: 22,
            fontSize: 10,
            fontWeight: 'bold',
            lineHeight: '10px',
            marginTop: 5
        },
        card: { padding: 5, width: 195, margin: 5 },
    }
    const book = {
        url: url,
        title: title,
        author: author
    }

    const handleClickButton = (label) => {
        switch (label) {
            case 'delete':
                return deleteBook(args);
            case 'request':
                return handleRequest(args);
            case 'cancel':
                return requestCancel(args);
            case 'approved':
                return handleRequestForMe(args);
            case 'return':
                return returnBorrowedBook(args);
        }
    }
    const handleError = (e) => {
        e.target.src = process.env.NODE_ENV === 'production' ?
            'https://placeholdit.imgix.net/~text?txtsize=40&txt=book village&w=200&h=200' :
            '/pics/8.jpg';
    }
    return (
        <Card style={styles.card} raise>
            <div>
                <img src={url} onError={handleError} style={{ width: '100%' }} alt={title} />
            </div>
            <div style={{ marginTop: -4 }}>
                <Button
                    id="d"
                    raised
                    primary
                    disabled={!username || (username && label === 'request' && owner === userId) ? true : false}
                    style={styles.button}
                    onClick={() => handleClickButton(label)}>
                    {label}
                </Button>
            </div>
        </Card>
    )
}

Book.PropTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    label: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    requestCancel: PropTypes.func.isRequired,
    handleRequest: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    returnBorrowedBook: PropTypes.func.isRequired
}

export default Book;
