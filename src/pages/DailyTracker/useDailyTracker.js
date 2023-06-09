import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTimeInfo from './useTimeInfo';
import api from '../../services/api';
import useAuth from '../../services/useAuth';
import useDate from '../../utils/useDate';

const useDailyTracker = () => {
  // Hooks
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [putId, setPutId] = useState(null);
  const [error, setError] = useState(null);
  const [timesheetData, setTimesheetData] = useState([]);
  const navigate = useNavigate();

  const {
    getCurrentUser,
    logout,
  } = useAuth();

  const {
    stopwacth,
    date,
    clock,
    start,
    pause,
    reset,
  } = useTimeInfo();

  const {
    getDate,
    dateToString,
    subtractHours,
    parseTimesheetData,
  } = useDate();

  // Requests
  const handleError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

  const fetchTimesheet = async () => {
    setIsLoading(true);
    api
      .get('/api/Timesheet')
      .then((response) => {
        setTimesheetData(parseTimesheetData(response.data));
        const lastEntry = getDate(
          response.data.items[0].start,
        );
        localStorage.setItem('lastEntry', lastEntry);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          logout();
          navigate('/');
          return;
        }
        handleError(err);
        setIsLoading(false);
      });
  };

  const updateTimesheet = async (type) => {
    const now = subtractHours(new Date(), 3);
    const timesheet = JSON.parse(localStorage.getItem('timesheet'));
    timesheet[type] = now.toISOString();
    localStorage.setItem('timesheet', JSON.stringify(timesheet));
    api
      .put(
        `/api/Timesheet/${putId}`,
        timesheet,
      )
      .then(() => {
        fetchTimesheet();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          logout();
          navigate('/');
        }
        handleError(err);
        setIsLoading(false);
      });
  };

  const postTimesheet = async () => {
    const timesheet = {};
    api
      .post('/api/Timesheet')
      .then((response) => {
        setPutId(response.data.id);
        timesheet.start = response.data.start;
        localStorage.setItem('timesheet', JSON.stringify(timesheet));
        fetchTimesheet();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsLoading(false);
          logout();
          navigate('/');
          return;
        }
        if (err.response.status === 400) {
          handleError(`400: ${err.response.message}`);
          setIsLoading(false);
          return;
        }
        if (err.response.status === 404) {
          handleError('404: Not Found');
          setIsLoading(false);
          return;
        }
        handleError(err.response.message);
        setIsLoading(false);
      });
  };

  // Handlers
  const getUser = () => {
    const user = getCurrentUser();
    if (user) {
      return user.name.split(' ')[0];
    }
    return null;
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('timesheet');
    localStorage.removeItem('lastEntry');
    navigate('/');
  };

  const onPressArrived = () => {
    const lastEntry = localStorage.getItem('lastEntry');
    if (lastEntry === dateToString(new Date())) {
      handleError('Já existe um registro na data de hoje');
      return;
    }
    if (status === '' || status === 'ended') {
      setStatus('arrived');
      start();
      postTimesheet();
    }
  };

  const onPressLunch = () => {
    if (status !== 'arrived') return;
    setStatus('lunch');
    pause();
    updateTimesheet('startLunch');
  };

  const onPressReturned = () => {
    if (status !== 'lunch') return;
    setStatus('back');
    start();
    updateTimesheet('endLunch');
  };

  const onPressEnd = () => {
    if (status === 'arrived' || status === 'back') {
      setStatus('ended');
      start();
      reset(new Date(), false);
      updateTimesheet('end');
    }
  };

  // Events
  useEffect(() => {
    fetchTimesheet();
  }, []);

  return {
    username: getUser(),
    handleLogout,
    stopwacth,
    date,
    clock,
    status,
    onPressArrived,
    onPressLunch,
    onPressReturned,
    onPressEnd,
    isLoadingTimeSheets: isLoading,
    timesheetData,
    error,
  };
};

export default useDailyTracker;
