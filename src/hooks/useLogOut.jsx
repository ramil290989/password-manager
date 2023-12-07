import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import AuthContext from '../context/AuthContext.jsx';
import { actions as passwordsActions } from '../slices/passwordsSlice.js';

const useLogOut = () => {
  const dispatch = useDispatch();
  const { setAuthData } = useContext(AuthContext);
  const logOut = () => {
    localStorage.removeItem('pasManUsername');
    localStorage.removeItem('pasManToken');
    setAuthData({});
    dispatch(passwordsActions.resetData());
  };
  return logOut;
};

export default useLogOut;
