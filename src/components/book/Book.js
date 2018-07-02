import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardActions } from 'react-md';

import { withMainComponent } from '../hoc';

const Book = ({title, _id, url, author, request, requestBy, userId, approved, username, user, onClick, label, 
              handleRequestForMe, returnBorrowedBook, requestCancel, handleRequest, deleteBook}) => {
    
    const args = {
        id: _id,
        to: user,
        request: request,
        approved: approved,
        requestBy: requestBy
    }
    const reqForMeArgs = {

    }
    const styles = {
        button: {
            width: 140, 
            height: 22, 
            fontSize: 10, 
            fontWeight: 'bold', 
            lineHeight: '10px'
        }
    }
    const book = {
        url: url,
        title: title,
        author: author
    }
    // onClick={this.handleRequestForMe.bind(this)}
     //onClick={this.returnBook.bind(this)}
    const handleClickButton = (label) => {
        switch (label) {
            case 'delete':
                return deleteBook(args);
            case 'request':
                return handleRequest(args);
            case 'cancel': 
                return requestCancel(args);
            case 'approved':
                return  handleRequestForMe(args);
            case 'return':
                return returnBorrowedBook(args);            
           // default:
               // break;
        }
    }
    return (
        <Card className="my-card" raise>
            <div>
                <img src={url} style={{ width: '140px', height: '200px' }} alt={title} />
            </div>
            <div style={{marginTop: -4}}>
               <Button 
                id="d" 
                raised 
                primary 
                disabled={!username || (username && label === 'request' && user === userId) ? true : false}
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