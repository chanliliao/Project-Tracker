import {
  GET_LIST,
  ADD_LISTITEM,
  DELETE_LISTITEM,
  SEARCH_LIST,
  SET_LOADING,
  LIST_ERROR,
} from './types';

export default (state, action) => {
  switch (action.type) {
    // add item using es6 spread operator
    case ADD_LISTITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case GET_LIST:
      return {
        ...state,
        list: action.payload.logs,
        loading: false,
      };
    // delete by using filter to search
    case DELETE_LISTITEM:
      return {
        ...state,
        list: state.list.filter((listItem) => listItem.id !== action.payload),
        loading: false,
      };
    // case SEARCH_LIST:
    //   return {
    //     ...state,
    //     list: action.payload,
    //   };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
