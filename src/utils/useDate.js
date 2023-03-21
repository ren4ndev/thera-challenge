import useParser from './useParser';

const useDate = () => {
  const {
    padTo2Digits,
  } = useParser();

  const dateToString = (date) => (
    `${padTo2Digits(
      date.getDate(),
    )}/${padTo2Digits(
      date.getMonth(),
    )}/${padTo2Digits(
      date.getFullYear(),
    )}`
  );

  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${padTo2Digits(
      date.getDate(),
    )}/${padTo2Digits(
      date.getMonth(),
    )}/${padTo2Digits(
      date.getFullYear(),
    )}`;
  };

  /* Workaround utilizado para lidar com retorno da API da rota POST api/Timesheet
  A rota retorna uma data de início de turno no formato ISO8601 que deveria estar
  no fuso UTC, mas está no fuso BRT. */
  const addHours = (date, hours) => {
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return date;
  };

  const subtractHours = (date, hours) => {
    date.setTime(date.getTime() - hours * 60 * 60 * 1000);
    return date;
  };

  const getHour = (timestamp) => {
    if (timestamp) {
      const date = addHours(new Date(timestamp), 3);
      return `${padTo2Digits(
        date.getHours(),
      )}:${padTo2Digits(
        date.getMinutes(),
      )}:${padTo2Digits(
        date.getSeconds(),
      )}`;
    }
    return '--:--:--';
  };

  const calculateDelta = (firstTimestamp, secondTimestamp) => {
    const first = new Date(firstTimestamp);
    const second = new Date(secondTimestamp);

    return Math.abs(first - second);
  };

  const toHours = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds,
    )}`;
  };

  const getTimeDelta = (timestamps) => {
    const {
      start,
      startLunch,
      endLunch,
      end,
    } = timestamps;

    if (!start || !end) return '--:--:--';

    if (startLunch && endLunch) {
      const firstDelta = calculateDelta(start, startLunch);
      const secondDelta = calculateDelta(endLunch, end);

      return toHours(firstDelta + secondDelta);
    }

    return toHours(calculateDelta(start, end));
  };

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

  const parseSingleRecord = (data) => {
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
    addHours,
    subtractHours,
    dateToString,
    parseTimesheetData,
    parseSingleRecord,
  };
};

export default useDate;
