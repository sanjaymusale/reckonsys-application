import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.scss';

const AdminMenu = () => {
  return (
    <React.Fragment>
      <div className="nav-menu-title">
        <Link>Admin Section</Link>
      </div>
      <div className="nav-menu">
        <Link to="/members">Members</Link>
      </div>
      <div className="nav-menu">
        <Link to="/products">Products</Link>
      </div>
      <div className="nav-menu">
        <Link to="/reporting">Reporting</Link>
      </div>
      <div className="nav-menu">
        <Link to="/users">Users</Link>
      </div>
    </React.Fragment>
  );
};

const NavBar = props => {
  const { user } = props;
  return (
    <div className="main navbar">
      <div className="container navbar-container">
        <div className="nav">
          {!user.isAuthenticated ? (
            <div className="nav-menu-title">
              <Link to="/">Reckonsys</Link>
            </div>
          ) : (
            <AdminMenu />
          )}
        </div>
        <div className="nav">
          {user.isAuthenticated && (
            <React.Fragment>
              <div className="nav-menu">
                <Link>{user.user}</Link>
              </div>
              <div className="nav-menu">
                <Link to="/logout">Logout</Link>
              </div>
            </React.Fragment>
          )}
          {!user.isAuthenticated && (
            <React.Fragment>
              <div className="nav-menu">
                <Link to="/login">Login</Link>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.users
  };
};
export default connect(mapStateToProps)(NavBar);
