import React from 'react';


import { SimplifiedUser } from './Type.tsx';


function UserRow({ isOldest, firstName, lastName, city, birthDate }: SimplifiedUser) {
  return (
    <tr className={isOldest ? 'highlight' : ''}>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{city}</td>
      <td>{new Date(birthDate).toLocaleDateString()}</td>
    </tr>
  );
}

export default UserRow;
