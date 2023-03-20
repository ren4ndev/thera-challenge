import { useState } from 'react';
import { useStopwatch, useTime } from 'react-timer-hook';
import useDate from '../../utils/useDate';
import useParser from '../../utils/useParser';

const useTimeInfo = () => {
  const [status, setStatus] = useState('');
  const { dateToString } = useDate();
  const today = new Date();

  const {
    seconds,
    minutes,
    hours,
    // isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const {
    minutes: clockMinutes,
    hours: clockHours,
  } = useTime({ format: '24-hour' });

  const {
    padTo2Digits,
  } = useParser();

  const getStopwatch = () => (
    `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds,
    )}`
  );

  const getClock = () => (
    `${padTo2Digits(clockHours)}:${padTo2Digits(clockMinutes)}`
  );

  const onPressArrived = () => {
    setStatus('arrived');
    start();
  };
  const onPressLunch = () => {
    setStatus('lunch');
    pause();
  };
  const onPressReturned = () => {
    setStatus('back');
    start();
  };
  const onPressEnd = () => {
    setStatus('ended');
    start();
    reset(today, false);
  };

  return {
    stopwacth: getStopwatch(),
    date: dateToString(today),
    clock: getClock(),
    status,
    onPressArrived,
    onPressLunch,
    onPressReturned,
    onPressEnd,
  };
};

export default useTimeInfo;
