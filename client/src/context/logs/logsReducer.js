import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  DELETE_RESET,
} from './types';

export default (state, action) => {
  switch (action.type) {
    // add item using es6 spread operator
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload.logs,
        loading: false,
      };
    // delete by using filter to search
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        logDeleted: true,
        loading: false,
      };
    case DELETE_RESET:
      return {
        ...state,
        logDeleted: false,
      };
    case SEARCH_LOGS:
      return {
        ...state,
        filtered: state.logs.filter((log) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return log.project.match(regex);
        }),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
