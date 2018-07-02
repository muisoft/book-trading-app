import * as ActionType from '../actions/ActionType';

const initialState = {
   books: [],
   mybooks: [],
   myrequest: [],
   requestforme: [],
   borrowedbook: [],
   users: [],
   user: {},
   book: {},
   isloading: false,
   iserror: false,
   partialState: {},
   visible: true,
   message: {},
   tabIndex: 0 
}

export const book = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ON_SUCCESS:
            return {
               ...state,
               books: action.payload.books,
               user: action.payload.user ? action.payload.user : null
            } 
          case ActionType.TAB_INDEX:
            return {
                ...state,
                tabIndex: action.payload
            }  
          case ActionType.GET_MY_BOOKS:
            return {
               ...state,
               mybooks: action.payload
            }
          case ActionType.GET_REQUEST_FOR_ME:
            return {
               ...state,
               requestforme: action.payload
            } 
          case ActionType.GET_BORROWED_BOOK:
           return {
               ...state,
               borrowedbook: action.payload
           }        
         case ActionType.ON_SIGNUP:
            return {
               ...state,
               books: action.payload
            }    
         case ActionType.ON_ERROR:
            return {
              ...state,
              iserror: action.status
            }
        case ActionType.ON_LOADING:
            return {
               ...state,
               isloading: action.status
            }
        case ActionType.IS_SAVED:
            return {
               ...state,
               message: action.payload,
               //user: action.payload
            }
        case ActionType.ON_SIGN_IN:
            return {
               ...state,
               //message: action.payload,
               user: action.user
            }    
        case ActionType.GET_MY_REQUEST:
            return {
               ...state,
               myrequest: action.payload,
            }
                 
       case ActionType.SIGN_OUT:
           return initialState;
        default:
          return state;
    }
}