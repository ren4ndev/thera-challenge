import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './pages/SignIn';
import DailyTracker from './pages/DailyTracker';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/tracker"
        element={(
          <PrivateRoute>
            <DailyTracker />
          </PrivateRoute>
        )}
      />
    </Routes>
  );
}

export default Router;
