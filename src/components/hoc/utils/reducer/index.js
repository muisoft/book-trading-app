import { push } from 'react-router-redux';
import {
    signin, signup, signout, getBooks, requestBook, borrowedBook, returnBorrowedBook,
    getMyBooks, deleteBook, cancelRequest, myRequest, hideDialog, addNewBook,
    twitterSignin,
    approvedRequest, requestForMe, changeProfile, changePassword, resetAll, getTabIndex
} from '../../../../actions';

export const mapStateToProps = ({ book }) => {
    return {
        partialState: book.partialState,
        user: book.user,
        books: book.books,
        isLoading: book.isloading,
        isError: book.iserror,
        borrowedbooks: book.borrowedbook,
        mybooks: book.mybooks,
        myrequests: book.myrequest,
        visible: book.visible,
        requestsforme: book.requestforme,
        message: book.message,
        tabIndex: book.tabIndex
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => {
            dispatch(signup(user))
        },
        signin: (user) => {
            dispatch(signin(user))
        },
        signout: () => {
            dispatch(signout())
        },
        gotoAllBooks: () => {
            dispatch(push('/allbooks'))
        },
        gotoSettings: () => {
            dispatch(push('/settings'))
        },
        gotoTwitter: () => {
            dispatch(twitterSignin())
        },
        getBooks: (url) => {
            dispatch(getBooks(url))
        },
        request: (book) => {
            dispatch(requestBook(book))
        },
        getBorrowedBook: () => {
            dispatch(borrowedBook())
        },
        returnBorrowedBook: (book) => {
            dispatch(returnBorrowedBook(book));
        },
        getMyBooks: (user) => {
            dispatch(getMyBooks(user))
        },
        toMyBooks: () => {
            dispatch(push('/books'))
        },
        remove: (book) => {
            dispatch(deleteBook(book))
        },
        cancelRequest: (book) => {
            dispatch(cancelRequest(book))
        },
        getMyRequest: (user) => {
            dispatch(myRequest(user))
        },
        hideDialog: () => {
            dispatch(hideDialog())
        },
        addNewBook: (payload) => {
            dispatch(addNewBook(payload))
        },
        cancel: () => {
            dispatch(push('/allbooks'))
        },
        approvedRequest: (id) => {
            dispatch(approvedRequest(id))
        },
        getRequestForMe: (user) => {
            dispatch(requestForMe(user))
        },
        updateProfile: (data) => {
            dispatch(changeProfile(data))
        },
        updatePassword: (data) => {
            dispatch(changePassword(data))
        },
        gotoLogin: () => {
            dispatch(push('/account/login'))
        },
        gotoNewBook: () => {
            dispatch(push('/newbook'))
        },
        resetAll: () => {
            dispatch(resetAll())
        },
        getCurrentTabIndex: (payload) => {
            dispatch(getTabIndex(payload))
        }
    }
}