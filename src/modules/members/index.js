import React, { useState } from 'react';
import './members.scss';
import membersData from './membersData';
import MemberTable from './table';

const Member = () => {
  const [members, setMembers] = useState(membersData);
  const [filterValue, setFilterValue] = useState('');

  const filterTable = () => {
    const filteredMembers = membersData.filter(member =>
      member.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setMembers(filteredMembers);
  };

  return (
    <div className="container">
      <div className="members-container">
        <div className="header-title">Members List</div>
        <div className="top-section">
          <div className="filter">
            <div className="input-row">
              <input
                type="text"
                placeholder="Filter the list with name"
                value={filterValue}
                onChange={e => setFilterValue(e.target.value)}
              />
            </div>
            <div>
              <button onClick={filterTable}>Filter</button>
            </div>
          </div>
          <button className="secondary-btn">Create Member</button>
        </div>
        <div className="table-data">
          <MemberTable membersData={members} />
        </div>
      </div>
    </div>
  );
};

export default Member;
