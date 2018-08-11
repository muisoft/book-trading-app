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
    return postData('/savebook', payload, isSaved);
}
export const deleteBook = (book) => {
    return postData('/deletebook', book, isSaved);
}
export const requestBook = (book) => {
    return postData('/requestbook', book, isSaved);
}
export const cancelRequest = (book) => {
   return postData('/cancelrequest', book, isSaved);
}
export const approvedRequest = (book) => {
   return postData('/approvedrequest', book, isSaved);
}
export const changePassword = (payload) => {
    return postData('/updatepassword', payload, isSaved);
}
export const changeProfile = (payload) => {
    return postData('/updateprofile', payload, isSaved);
}
export const returnBorrowedBook = (book) => {
    return postData('/returnbook', book, isSaved);
}


export const borrowedBook = () => {
   return getData('/borrowedbook', isBorrowedBook);
}
export const requestForMe = (book) => {
   return getData('/requestforme', isRequestForMe);
}
export const myRequest = (book) => {
   return getData('/myrequest', isMyRequest);
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


export const signup = (user) => {
    return postData('/signup', user, isSignin);
}
export const getMyBooks = () => {
    return getData('/mybooks', isMyBooks);
}

export const getBooks = (url) => {
    return getData(url, isSuccess);
}
export const getData = (url, done) => {
  return (dispatch) => {
      fetch(url,
          {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Cache': 'no-cache'
              },
              credentials: 'same-origin'
          })
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              return response;
          })
          .then((response) => response.json())
          .then((response) => {
              dispatch(done(response));
          })
          .catch((err) => console.error(err));
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
