import React from 'react';
import Table from './../../components/table';
import './../../styles/module.scss';
import ReportingData from './reportingData';

const Reporting = () => {
  const headers = ['Id', 'Reported By', 'Reported To', 'Date', 'Time'];
  const rowData = ['id', 'reportedBy', 'reportedTo', 'date', 'time'];
  return (
    <div className="container">
      <div className="module-container">
        <div className="header-title">Report List</div>
        <div className="table-data">
          <Table data={ReportingData} headers={headers} rowData={rowData} />
        </div>
      </div>
    </div>
  );
};

export default Reporting;
