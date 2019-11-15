import React from 'react';
import Table from './../../components/table';
import './../../styles/module.scss';
import UsersData from './usersData';

const Users = () => {
  const headers = ['Id', 'Name', 'User Name', 'Email', 'Phone', 'Website'];
  const rowData = ['id', 'name', 'username', 'email', 'phone', 'website'];
  return (
    <div className="container">
      <div className="module-container">
        <div className="header-title">Users List</div>
        <div className="table-data">
          <Table data={UsersData} headers={headers} rowData={rowData} />
        </div>
      </div>
    </div>
  );
};

export default Users;
