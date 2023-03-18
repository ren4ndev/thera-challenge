import React from 'react';
import {
  DaylyTrackerContainer,
} from './styles';
import Header from '../../components/Header';
import TimeInfo from '../../components/TimeInfo';
import TimeActions from '../../components/TimeActions';
import TimeTable from '../../components/TimeTable';
import useDailyTracker from './useDailyTracker';

function DailyTracker() {
  const {
    username,
    handleLogout,
  } = useDailyTracker();

  return (
    <DaylyTrackerContainer>
      <Header
        username={username}
        handleLogout={handleLogout}
      />
      <TimeInfo />
      <TimeActions />
      <TimeTable />
    </DaylyTrackerContainer>
  );
}

export default DailyTracker;
