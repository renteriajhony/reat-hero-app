import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  ROUTE_DC_PAGE,
  ROUTE_DEFAULT_PATH,
  ROUTE_LOGIN,
  ROUTE_MARVEL_PAGE,
  ROUTE_SEARCH_PAGE,
} from '../../router';
import { AuthContext } from '../../auth';
import { useContext } from 'react';

export const Navbar = () => {
  const navigate = useNavigate();

  const { user, logouth } = useContext(AuthContext);

  const onLogoutEvent = () => {
    logouth();
    navigate(ROUTE_LOGIN, { replace: true });
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to={ROUTE_DEFAULT_PATH}>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to={ROUTE_MARVEL_PAGE}
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to={ROUTE_DC_PAGE}
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to={ROUTE_SEARCH_PAGE}
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>{user?.name}</span>
          <button
            className='nav-item nav-link btn'
            onClick={() => {
              onLogoutEvent();
            }}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
