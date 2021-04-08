import React, { useReducer } from 'react';

// context
import ListContext from './listContext';
import listReducer from './listReducer';

import {
  GET_LIST,
  ADD_LISTITEM,
  DELETE_LISTITEM,
  SEARCH_LIST,
  SET_LOADING,
  LIST_ERROR,
} from './types';

const ListState = (props) => {
  const initialState = {
    list: null,
    current: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  //add list item
  const addListItem = async (listItem) => {
    try {
      setLoading();

      //grab data
      const res = await fetch('/list', {
        method: 'POST',
        body: JSON.stringify(listItem),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      //set data
      const data = await res.json();

      //send data
      dispatch({
        type: ADD_LISTITEM,
        payload: data,
      });
    } catch (err) {
      // catch errors
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

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

  //delete list item
  const deleteListItem = async (id) => {
    try {
      setLoading();

      await fetch(`/list/${id}`, {
        method: 'DELETE',
      });

      dispatch({
        type: DELETE_LISTITEM,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //search list
  const searchList = async (text) => {
    try {
      setLoading();

      const res = await fetch(`/list/?q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_LIST,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //set loading
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
        addListItem,
        deleteListItem,
        searchList,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
