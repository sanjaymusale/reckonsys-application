import React from 'react';

const MemberTable = ({ membersData, openEditModal, deleteMember }) => {
  return (
    <table>
      <tbody>
        <tr className="thead">
          <th className="header">ID</th>
          <th className="header">Name</th>
          <th>
            Sections
            <table>
              <tbody>
                <tr className="thead">
                  <th>1st</th>
                  <th>2nd</th>
                  <th>3rd</th>
                  <th>4th</th>
                </tr>
              </tbody>
            </table>
          </th>
          <th className="header">Join Date</th>
          <th className="header">Status</th>
          <th className="header"></th>
        </tr>
        {membersData.map((member, index) => {
          return (
            <tr key={index}>
              <td className="header">{index + 1}</td>
              <td>{member.name}</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      {member.sections.map((section, i) => {
                        return <td key={i}>{section}</td>;
                      })}
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>{member.join_date}</td>
              <td>
                <div
                  className={
                    member.status === 'active'
                      ? 'status-active'
                      : 'status-inactive'
                  }
                >
                  {member.status}
                </div>
              </td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => openEditModal(member)}
                >
                  Edit
                </button>
                <button
                  className="edit-btn"
                  style={{ marginLeft: '5px' }}
                  onClick={() => deleteMember(member.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MemberTable;
