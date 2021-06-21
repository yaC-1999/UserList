import React from 'react';
import './User.css';

const UserLi = () => {
  const users = [
    { id: 1, name: "Sam Smith" },
    { id: 2, name: "Lisa More" },
    { id: 3, name: "David Cohen" },
    { id: 4, name: "Jim Taylor" },
  ];

  const renderedUsers = users.map(({ id, name }) => (
    <li className={'list'} key={id}>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-fill icon" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
      <span className={'userName'}>
        {name}
      </span>

    </li>


  ));

  return <ul>{renderedUsers}</ul>;

};


export default UserLi;
