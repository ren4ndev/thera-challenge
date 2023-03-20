import { useTimer } from 'react-timer-hook';
import useDate from '../../utils/useDate';

const useTimeInfo = () => {
  const { dateToString } = useDate();
  const date = new Date();

  const {
    seconds,
    minutes,
    hours,
    // isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ date: date.getDate() + 1 });

  const padTo2Digits = (num) => num.toString().padStart(2, '0');

  const getStopwatch = () => (
    `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds,
    )}`
  );

  const onPressArrived = () => {
    start();
  };
  const onPressLunch = () => {
    pause();
  };
  const onPressReturned = () => {
    resume();
  };
  const onPressEnd = () => {
    restart();
  };

  return {
    stopwacth: getStopwatch(),
    date: dateToString(date),
    onPressArrived,
    onPressLunch,
    onPressReturned,
    onPressEnd,
  };
};

export default useTimeInfo;
