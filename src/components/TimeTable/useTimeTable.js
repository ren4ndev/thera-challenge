import { useEffect } from 'react';
import useRequestTimesheets from '../../services/useRequestTimesheets';
import useDate from '../../hooks/useDate';

const useTimeTable = () => {
  const {
    isLoading,
    fetchTimesheet,
    data,
  } = useRequestTimesheets();

  const {
    getDate,
    getHour,
    getTimeDelta,
  } = useDate();

  useEffect(() => {
    fetchTimesheet();
  }, []);

  const parsedData = () => {
    if (!data) return null;
    const parsedTimesheet = data.items.map((item) => (
      {
        id: item.id,
        date: getDate(item.start),
        start: getHour(item.start),
        startLunch: getHour(item.startLunch),
        endLunch: getHour(item.endLunch),
        end: getHour(item.end),
        totalTime: getTimeDelta(item),
      }
    ));
    return parsedTimesheet;
  };

  return {
    isLoading,
    data: parsedData(),
  };
};

export default useTimeTable;
