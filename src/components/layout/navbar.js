import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavMenu = () => {
  return (
    <React.Fragment>
      <div className="nav-menu">
        <Link>Members</Link>
      </div>
      <div className="nav-menu">
        <Link>Products</Link>
      </div>
      <div className="nav-menu">
        <Link>Reporting</Link>
      </div>
      <div className="nav-menu">
        <Link>Users</Link>
      </div>
    </React.Fragment>
  );
};

const NavBar = () => {
  return (
    <div className="main navbar">
      <div className="container navbar-container">
        <div className="nav">
          <div className="nav-menu-title">
            <Link>Admin Section</Link>
          </div>
          <NavMenu />
        </div>
        <div className="nav">
          <div className="nav-menu">
            <Link>test user</Link>
          </div>
          <div className="nav-menu">
            <Link>Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
