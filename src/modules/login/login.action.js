import axios from 'axios';
import { push } from 'react-router-redux';
import { actions } from './login.constant';
import { API_ENDPOINT } from '../../configs';

const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } = actions;
function login(dispatch) {
  return async (username, password) => {
    dispatch({ type: LOGIN_START });
    try {
      const response = await axios.post(`${API_ENDPOINT}/accounts/auth`, { username, password });
      const result = await response.data;
      if (result.error) {
        dispatch({ type: LOGIN_FAIL });
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: result.token });
        dispatch(push('/dashboard'));
      }
    } catch (parseJSONError) {
      dispatch({ type: LOGIN_FAIL });
    }
  };
}
function logout(dispatch) {
  return () => {
    dispatch(push('/'));
  };
}
export { login, logout };
