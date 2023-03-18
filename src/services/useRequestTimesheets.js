import { useState } from 'react';
import api from './api';

const useRequestTimesheets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(false);

  const fetchTimesheet = async () => {
    setIsLoading(true);
    await api
      .get('/api/Timesheet')
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      });
  };

  return {
    isLoading,
    fetchTimesheet,
    data,
  };
};

export default useRequestTimesheets;
