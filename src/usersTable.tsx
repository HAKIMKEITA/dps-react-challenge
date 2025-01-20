import React from 'react';
import UserRow from './userList.tsx';
import { SimplifiedUser } from './Users.tsx';

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
