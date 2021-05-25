import React, { useReducer } from 'react';
import axios from 'axios';

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
  DELETE_REST,
} from './types';

const ListState = (props) => {
  const initialState = {
    list: [],
    // listItemDeleted: false,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  //add list item
  const addListItem = async (listItem) => {
    const config = {
      header: { 'Content-Type': 'application/json' },
    };

    try {
      setLoading();

      //grab data
      const { data } = await axios.post('/api/logs', listItem, config);

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
  const getList = async (keyword = '') => {
    try {
      setLoading();

      const { data } = await axios.get(`/api/logs?keyword=${keyword}`);

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

      await axios.delete(`/api/logs/${id}`);

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

  // //search list
  // const searchList = async (text) => {
  //   try {
  //     setLoading();

  //     const res = await fetch(
  //       `https://personal-project-tracker1.herokuapp.com/list/?q=${text}`
  //     );
  //     const data = await res.json();

  //     dispatch({
  //       type: SEARCH_LIST,
  //       payload: data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: LIST_ERROR,
  //       payload: err.response.msg,
  //     });
  //   }
  // };

  //set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const deleteRest = () => {
    dispatch({ type: DELETE_REST });
  };

  return (
    <ListContext.Provider
      value={{
        list: state.list,
        current: state.current,
        loading: state.loading,
        error: state.error,
        listItemDeleted: state.listItemDeleted,
        getList,
        addListItem,
        deleteListItem,
        deleteRest,
        // searchList,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
