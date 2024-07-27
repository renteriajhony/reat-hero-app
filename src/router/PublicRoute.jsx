import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';
import { ROUTE_MARVEL_PAGE } from './AppRouteName';

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return !logged ? children : <Navigate to={`/${ROUTE_MARVEL_PAGE}`} />;
};
