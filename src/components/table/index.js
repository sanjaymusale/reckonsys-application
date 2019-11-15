import React from 'react';
import './../../styles/module.scss';

const Table = ({ data, headers, rowData }) => {
  return (
    <table>
      <tbody>
        <tr className="thead">
          {headers.map((header, i) => (
            <th key={i} className="header">
              {header}
            </th>
          ))}
        </tr>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              {rowData.map((rows, index) => (
                <td key={index} className={rows === 'id' ? 'header' : ''}>
                  {item[rows]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
