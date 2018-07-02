import * as ActionType from './ActionType';

export const isMyBooks = (payload) => {
    return {
        type: ActionType.GET_MY_BOOKS,
        payload
    }
}
export const isMyRequest = (payload) => {
    return {
        type: ActionType.GET_MY_REQUEST,
        payload
    }
}
export const isBorrowedBook = (payload) => {
    return {
        type: ActionType.GET_BORROWED_BOOK,
        payload
    }
}
export const isRequestForMe = (payload) => {
    return {
        type: ActionType.GET_REQUEST_FOR_ME,
        payload
    }
}
export const isSuccess = (payload) => {
    return {
        type: ActionType.ON_SUCCESS,
        payload
    }
}
export const isSignin = (user) => ({
    type: ActionType.ON_SIGN_IN,
    user
})
export const isLoading = (status) => {
    return {
        type: ActionType.ON_LOADING,
        status
    }
}
export const isError = (status) => {
    return {
        type: ActionType.ON_ERROR,
        status
    }
}
export const hideDialog = () => {
    return {
        type: ActionType.HIDE_DIALOG,
        
    }
}
export const isSaved = (payload) => {
    return {
        type: ActionType.IS_SAVED,
        payload
    }
}
export const isNotSave = () => {
    return {
        type: ActionType.IS_NOT_SAVE,
    }
}
export const resetAll = () => {
    return {
        type: ActionType.SIGN_OUT,
    }
}
export const getTabIndex = (payload) => {
    return {
        type: ActionType.TAB_INDEX,
        payload
    }
}


export const addNewBook = (payload) => {
    return postData('/save', payload, isSaved);
}
export const deleteBook = (book) => {
    return postData('/deleteBook', book, isSaved);
}
export const requestBook = (book) => {
   return postData('/requestBook', book, isSaved);
}
export const cancelRequest = (book) => {
   return postData('/cancelRequest', book, isSaved);
}
export const approvedRequest = (book) => {
   return postData('/approvedRequest', book, isSaved);
}
export const borrowedBook = (book) => {
   return getData('/borrowedBook', isBorrowedBook);
}
export const returnBorrowedBook = (book) => {
    return postData('/returnBorrowedBook', book, isSaved);
}
export const requestForMe = (book) => {
   return getData('/requestForMe', isRequestForMe);
}
export const myRequest = (book) => {
 // console.log('ID2: '+ payload.id);
   return getData('/myRequest', isMyRequest);
}
export const signin = (user) => {
    return postData('/signin', user, isSignin);
}
export const signout = () => {
    return getData('/signout', resetAll);
}
export const twitterSignin = () => {
    return getData('/auth/twitter', isSaved);
}
export const changePassword = (payload) => {
   return postData('/updatePassword', payload, isSaved);
}
export const changeProfile = (payload) => {
    return postData('/updateProfile', payload, isSaved);
}

export const signup = (user) => {
    return postData('/signup', user, isSaved);
}
export const getMyBooks = (payload) => {
    return getData('/myBooks', isMyBooks);
}

export const getBooks = (url) => {
    return getData(url, isSuccess);
}
export const getData = (url, done) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(url, {
  credentials: 'include'
})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(isLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(done(response));
            })
            .catch(() => dispatch(isError(true)))
    }
}
const postData = (url, payload, done) => {
    
     return (dispatch) => {
       fetch(url, {
           method: 'POST',
           body: JSON.stringify(payload),
           credentials: 'same-origin',
           headers: new Headers({
              'Content-Type': 'application/json'
           })
       })
         .then(res => {
             if(!res.ok){
                 throw Error(res.statusText);
             }
             return res;
         })
         .then(res => res.json())
         .then(res => dispatch(done(res)))
         .catch(() => dispatch(isError(true)));
   }
}