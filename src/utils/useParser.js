import useDate from './useDate';

const useParser = () => {
  const {
    getDate,
    getHour,
    getTimeDelta,
  } = useDate();

  const parseTimesheetData = (data) => {
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
    parseTimesheetData,
  };
};

export default useParser;
