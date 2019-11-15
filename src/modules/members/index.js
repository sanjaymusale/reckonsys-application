import React, { useState } from 'react';
import './members.scss';
import membersData from './membersData';
import MemberTable from './table';
import AddMember from './addMember';

const Member = () => {
  const [initialData, setInitialData] = useState(membersData);
  const [members, setMembers] = useState(membersData);
  const [filterValue, setFilterValue] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const filterTable = () => {
    const filteredMembers = initialData.filter(member =>
      member.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setMembers(filteredMembers);
  };

  const onSubmit = values => {
    let status;
    if (values.status.length) {
      status = 'active';
    } else {
      status = 'inactive';
    }
    const memberToAdd = {
      id: Math.floor(Math.random() * 10),
      name: values.name,
      sections: [
        values.section1,
        values.section2,
        values.section3,
        values.section4
      ],
      join_date: values.joinDate,
      status
    };
    setMembers([...members, memberToAdd]);
    setInitialData([...initialData, memberToAdd]);
    toggle();
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
          <button className="secondary-btn" onClick={toggle}>
            Create Member
          </button>
        </div>
        <div className="table-data">
          <MemberTable membersData={members} />
        </div>
        <AddMember toggle={toggle} modal={modal} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Member;
