import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';

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

const ListState = (props) => {
  const initialState = {
    list: [1, 2, 3],
    current: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  // get list from server
  const getList = async () => {
    try {
      setLoading();

      const res = await fetch('/list');
      const data = await res.json();

      dispatch({
        type: GET_LIST,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };

  return (
    <ListContext.Provider
      value={{
        list: state.list,
        current: state.current,
        loading: state.loading,
        error: state.error,
        getList,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
