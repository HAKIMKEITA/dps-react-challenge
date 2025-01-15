import React from 'react';
import UserRow from './userRow.tsx';
import { SimplifiedUser } from './Type.tsx';

type UserTableProps = {
  users: SimplifiedUser[];
};

function UserTable({ users }: UserTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Birth Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} {...user} />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
