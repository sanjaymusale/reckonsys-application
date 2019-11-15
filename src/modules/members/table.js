import React from 'react';

const MemberTable = ({ membersData }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th className="header">ID</th>
          <th className="header">Name</th>
          <th>
            Sections
            <table>
              <tbody>
                <tr>
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
          <th className="header">Join</th>
        </tr>
        {membersData.map((member, index) => {
          return (
            <tr key={index}>
              <td className="header">{member.id}</td>
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
              <td>{member.status}</td>
              <td>Join</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MemberTable;
