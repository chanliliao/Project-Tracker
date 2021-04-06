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

  // get logs from server
  const getLogs = () => async (dispatch) => {
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
        type: LOGS_ERROR,
        payload: err.response.statusText,
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
        List: state.list,
        current: state.current,
        loading: state.loading,
        error: state.error,
        getLogs,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
