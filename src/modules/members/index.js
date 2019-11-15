import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import './../../styles/module.scss';
import membersData from './membersData';
import MemberTable from './table';
import AddMember from './addMember';
import EditMember from './editMember';

const Member = () => {
  const [initialData, setInitialData] = useState(membersData);
  const [members, setMembers] = useState(membersData);
  const [filterValue, setFilterValue] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editMember, setEditMember] = useState({});

  const addToggle = () => setAddModal(!addModal);
  const editToggle = () => setEditModal(!editModal);

  const openEditModal = member => {
    setEditMember(member);
    editToggle();
  };

  const filterTable = () => {
    const filteredMembers = initialData.filter(member =>
      member.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setMembers(filteredMembers);
  };

  const onUpdate = value => {
    const updatedMember = {
      id: editMember.id,
      name: value.name,
      sections: [
        value.section1,
        value.section2,
        value.section3,
        value.section4
      ],
      join_date: value.joinDate,
      status: value.status
    };
    const updatedData = members.map(member => {
      if (member.id === editMember.id) return updatedMember;
      return member;
    });
    setMembers(updatedData);
    setInitialData(updatedData);
    editToggle();
  };

  const onSubmit = values => {
    const memberToAdd = {
      id: uuid(),
      name: values.name,
      sections: [
        values.section1,
        values.section2,
        values.section3,
        values.section4
      ],
      join_date: values.joinDate,
      status: values.status
    };
    setMembers([...members, memberToAdd]);
    setInitialData([...initialData, memberToAdd]);
    addToggle();
  };

  return (
    <div className="container">
      <div className="module-container">
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
          <button className="secondary-btn" onClick={addToggle}>
            Create Member
          </button>
        </div>
        <div className="table-data">
          <MemberTable membersData={members} openEditModal={openEditModal} />
        </div>
        <AddMember toggle={addToggle} modal={addModal} onSubmit={onSubmit} />
        <EditMember
          toggle={editToggle}
          modal={editModal}
          onSubmit={onUpdate}
          editingData={editMember}
        />
      </div>
    </div>
  );
};

export default Member;
