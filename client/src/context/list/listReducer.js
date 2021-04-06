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

const initialState = {
  list: null,
  current: null,
  loading: false,
  error: null,
};
