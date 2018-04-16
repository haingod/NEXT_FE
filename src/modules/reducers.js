import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dashboardReducer from './dashboard/dashboard.reducer';
import authReducer from './login/login.reducer';

export default combineReducers({
  auth: authReducer,
  routing: routerReducer,
  dashboard: dashboardReducer,
});
