import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        Jobly
      </Link>
      {currentUser ? (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/companies">
              Companies
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/jobs">
              Jobs
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>
              Log out {currentUser.first_name || currentUser.username}
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;