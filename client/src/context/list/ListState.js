import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';

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

const ListState = (props) => {
  const initialState = {
    list: null,
    current: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <ListContext.Provider
      value={{
        List: state.list,
        current: state.current,
        loading: state.loading,
        error: state.error,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
