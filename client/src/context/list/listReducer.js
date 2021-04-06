import {
  GET_LIST,
  ADD_LISTITEM,
  DELETE_LISTITEM,
  UPDATE_LISTITEM,
  SEARCH_LOGS,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  LIST_ERROR,
} from '../actions/types';

export default (state, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
