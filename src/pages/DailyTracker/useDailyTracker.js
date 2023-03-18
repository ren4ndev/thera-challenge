import { useNavigate } from 'react-router-dom';
import useAuth from '../../services/useAuth';

const useDailyTracker = () => {
  const navigate = useNavigate();
  const {
    getCurrentUser,
    logout,
  } = useAuth();

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

  return {
    username: getUser(),
    handleLogout,
  };
};

export default useDailyTracker;
