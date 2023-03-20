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
    stopwacth,
    date,
    clock,
    status,
    onPressArrived,
    onPressLunch,
    onPressReturned,
    onPressEnd,
    isLoadingTimeSheets,
    timesheetData,
  } = useDailyTracker();

  return (
    <DaylyTrackerContainer>
      <Header
        username={username}
        handleLogout={handleLogout}
      />
      <TimeInfo
        stopwacth={stopwacth}
        date={date}
        clock={clock}
      />
      <TimeActions
        onPressArrived={onPressArrived}
        onPressLunch={onPressLunch}
        onPressReturned={onPressReturned}
        onPressEnd={onPressEnd}
        status={status}
      />
      <TimeTable
        isLoading={isLoadingTimeSheets}
        data={timesheetData}
      />
    </DaylyTrackerContainer>
  );
}

export default DailyTracker;
