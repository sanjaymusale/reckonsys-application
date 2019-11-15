import React from 'react';
import Table from './../../components/table';
import './../../styles/module.scss';
import productsData from './productsData';

const Products = () => {
  const headers = ['Id', 'Name', 'Brand', 'Price'];
  const rowData = ['id', 'name', 'brand', 'price'];
  return (
    <div className="container">
      <div className="module-container">
        <div className="header-title">Products List</div>
        <div className="table-data">
          <Table data={productsData} headers={headers} rowData={rowData} />
        </div>
      </div>
    </div>
  );
};

export default Products;
