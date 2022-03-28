// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';

const Logout = () => {
  localStorage.clear();
  return <Navigate to="/" />;
};

export default Logout;
