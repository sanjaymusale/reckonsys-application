import React from 'react';
import './members.scss';
import membersData from './membersData';

const Member = () => {
  return (
    <div className="container">
      <div className="members-container">
        <div className="header-title">Members List</div>
        <div className="top-section">
          <div className="filter">
            <div className="input-row">
              <input type="text" />
            </div>
            <div>
              <button>Filter</button>
            </div>
          </div>
          <button className="secondary-btn">Create Member</button>
        </div>
        <div className="table-data">
          <table>
            <tr>
              <th className="header">ID</th>
              <th className="header">Name</th>
              <th>
                Sections
                <table>
                  <tr>
                    <th>1st</th>
                    <th>2nd</th>
                    <th>3rd</th>
                    <th>4th</th>
                  </tr>
                </table>
              </th>
              <th className="header">Join Date</th>
              <th className="header">Status</th>
              <th className="header">Join</th>
            </tr>
            {membersData.map((member, index) => {
              return (
                <tr key={index}>
                  <td className="header">{member.id}</td>
                  <td>{member.name}</td>
                  <td>
                    <table>
                      <tr>
                        {member.sections.map((section, i) => {
                          return <td key={i}>{section}</td>;
                        })}
                      </tr>
                    </table>
                  </td>
                  <td>{member.join_date}</td>
                  <td>{member.status}</td>
                  <td>Join</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Member;
