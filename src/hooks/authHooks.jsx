import { useContext } from 'react';
import AuthContext from '../context/AuthContext.jsx';

const useLogIn = () => {
  const { logIn } = useContext(AuthContext);
  return logIn;
};

const useLogOut = () => {
  const { logOut } = useContext(AuthContext);
  return logOut;
};

const useAuthHeader = () => {
  const { authHeader } = useContext(AuthContext);
  return authHeader;
};

export {
  useLogIn,
  useLogOut,
  useAuthHeader,
};
