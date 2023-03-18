import React from 'react';
import Header from '../../components/Header';
import useDailyTracker from './useDailyTracker';

function DailyTracker() {
  const {
    username,
    handleLogout,
  } = useDailyTracker();

  return (
    <Header
      username={username}
      handleLogout={handleLogout}
    />
  );
}

export default DailyTracker;
