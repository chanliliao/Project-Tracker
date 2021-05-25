import React, { Fragment, useEffect, useContext } from 'react';

// context
import LogsContext from '../context/logs/logsContext';

// components
import Log from './Log';
import Preloader from '../layout/Preloader';

const Logs = () => {
  // initialized context
  const logsContext = useContext(LogsContext);
  const { _id, logs, filtered, loading, getLogs, logDeleted, deleteReset } =
    logsContext;

  // first time when page starts
  useEffect(() => {
    getLogs();

    if (logDeleted) {
      deleteReset();
    }
    // eslint-disable-next-line
  }, [logDeleted]);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Project Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        <Fragment>
          {filtered !== null
            ? filtered.map((log) => <Log log={log} key={_id} />)
            : logs.map((log) => <Log log={log} key={_id} />)}
        </Fragment>
      )}
    </ul>
  );
};

export default Logs;

//  )
