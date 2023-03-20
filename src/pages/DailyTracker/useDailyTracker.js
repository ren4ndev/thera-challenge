import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTimeInfo from './useTimeInfo';
import api from '../../services/api';
import useAuth from '../../services/useAuth';
import useParser from '../../utils/useParser';

const useDailyTracker = () => {
  // Hooks
  const [isLoading, setIsLoading] = useState(true);
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
    onPressArrived,
    onPressLunch,
    onPressReturned,
    onPressEnd,
  } = useTimeInfo();

  const {
    parseTimesheetData,
  } = useParser();

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
    navigate('/');
  };

  // Requests
  const fetchTimesheet = async () => {
    setIsLoading(true);
    api
      .get('/api/Timesheet')
      .then((response) => {
        setTimesheetData(parseTimesheetData(response.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
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
