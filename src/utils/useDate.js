const useDate = () => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

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

  const getHour = (timestamp) => {
    if (timestamp) {
      const date = new Date(timestamp);
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

  return {
    getDate,
    getHour,
    getTimeDelta,
    dateToString,
  };
};

export default useDate;
