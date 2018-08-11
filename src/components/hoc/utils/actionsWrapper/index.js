
export const actionsWrapper = (props) => {
    return {
        renderAllBooks: () => {
            props.getBooks('/allbooks');
        },
        renderMyBooks: () => {
            props.getMyBooks({ id: props.user._id });
        },
        renderBorrowedBooks: () => {
            props.getBorrowedBook();
        },
        renderRequestBookForMe: () => {
            if (props.user._id) {
                props.getRequestForMe({ id: props.user._id });
            }
        },
        renderMyRequestBook: () => {
            props.getMyRequest({ id: props.user._id });
        },
        handleRequest: ({ id, request, approved }) => {
            console.log('Request: ' + request + ' approved: ' + approved);
            if (request || approved) {
                alert('Sorry, It has already been requested, try another one.');
                return;
            }
            let requestBy = props.user._id;
            props.request({ id, requestBy });
            alert('Successfully requested');
        },
        returnBorrowedBook: ({ id }) => {
            let userId = props.user._id;
            props.returnBorrowedBook({ userId: userId, bookId: id });
            alert('Successfully requested');
            props.getBorrowedBook({ userId: props.user._id });
        },
        handleClick: () => {
            props.onClick({
                id: props._id,
                request: true,
                url: props.url,
                author: props.author,
                to: props.user
            });
        },
        deleteBook: ({ id }) => {
            props.remove({ bookId: id });
            alert('Successfully deleted');
            props.toMyBooks();
        },
        requestCancel: ({ id }) => {
            props.cancelRequest({ userId: props.user._id, bookId: id });
            alert('Successfully cancel request');
            props.getMyRequest({ id: props.user._id });
        },
        saveBook: (e) => {
            props.addNewBook({ ...props.partialState, owner: props.user._id });
            alert('Successfully added new book');
            props.cancel();
            e.preventDefault();
        },
        cancelBook: () => {
            props.cancel();
        },
        handleChange: (e, m) => {
            const target = m.target;
            const value = target.value;
            const name = target.name;
            props.partialState[name] = value;
        },
        onSignin: (e) => {
            e.preventDefault();
            props.signin(props.partialState);
        },
        onSignup: (e) => {
            e.preventDefault();
            let { username, email, password } = props.partialState;
            
            if (!username || !email  || !password) {
                alert('Field(s) is empty, fill it up');
                return;
            } else {
                props.signup(props.partialState);
            }
        },
        handleRequestForMe: ({ id }) => {
            props.approvedRequest({ bookId: id, userId: props.user._id });
            alert('Successfully approved');
            props.getRequestForMe({ id: props.user._id });
        },
        changeProfile: (e, profile) => {
            props.updateProfile(profile);
            alert('Changed successfully, Changes will take effect next time you login.');
            //props.signin(props.user);
            props.gotoSettings();
            e.preventDefault();
        },
        changePassword: (e) => {
            let user = props.partialState;
            if (user.newPassword2 !== user.newPassword) {
                alert('The two passwords are not equal');
                return;
            }
            props.updatePassword(user);
            alert('Changed successfully');
            props.gotoSettings();
            e.preventDefault();
        },
        handleSignout: () => {
            //props.resetAll();
            props.signout();
        }
    }
}