import {
  GET_LIST,
  ADD_LISTITEM,
  DELETE_LISTITEM,
  UPDATE_LISTITEM,
  SEARCH_LIST,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  LIST_ERROR,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ADD_LISTITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case DELETE_LISTITEM:
      return {
        ...state,
        list: state.list.filter((listItem) => listItem.id !== action.payload),
        loading: false,
      };
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
