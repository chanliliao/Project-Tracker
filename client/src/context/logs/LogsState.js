import React, { useReducer } from 'react';
import axios from 'axios';

// context
import LogsContext from './logsContext';
import logsReducer from './logsReducer';

import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  DELETE_RESET,
} from './types';

const LogsState = (props) => {
  const initialState = {
    logs: null,
    logDeleted: false,
    filtered: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(logsReducer, initialState);

  //add log item
  const addLog = async (log) => {
    const config = {
      header: { 'Content-Type': 'application/json' },
    };

    try {
      setLoading();

      //grab data
      const { data } = await axios.post('/api/logs', log, config);

      //send data
      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      // catch errors
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // get logs from server
  const getLogs = async () => {
    try {
      setLoading();

      const { data } = await axios.get(`/api/logs`);

      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //delete log item
  const deleteLog = async (id) => {
    try {
      setLoading();

      await axios.delete(`/api/logs/${id}`);

      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //search logs
  const searchLogs = async (text) => {
    dispatch({ type: SEARCH_LOGS, payload: text });
  };

  //set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const deleteReset = () => {
    dispatch({ type: DELETE_RESET });
  };

  return (
    <LogsContext.Provider
      value={{
        logs: state.logs,
        loading: state.loading,
        error: state.error,
        logDeleted: state.logDeleted,
        filtered: state.filtered,
        getLogs,
        addLog,
        deleteLog,
        deleteReset,
        searchLogs,
      }}
    >
      {props.children}
    </LogsContext.Provider>
  );
};

export default LogsState;
