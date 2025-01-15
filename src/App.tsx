import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './Filters.tsx';
import UserTable from './userTable.tsx';
import { SimplifiedUser } from './Type.tsx';

function App() {
  const [users, setUsers] = useState<Array<SimplifiedUser>>([]);
  const [filteredUsers, setFilteredUsers] = useState<Array<SimplifiedUser>>([]);
  const [nameFilter, setNameFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [highlightOldest, setHighlightOldest] = useState(false);

  // Retrieve users from the API
  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((response) => {
      // Filter data to keep only necessary fields
      const simplifiedUsers: SimplifiedUser[] = response.data.users.map((user: any) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
        city: user.address.city,
      }));
      setUsers(simplifiedUsers);
      setFilteredUsers(simplifiedUsers);
    });
  }, []);

  // Update filtered users according to criteria
  useEffect(() => {
    let filtered = users;

    if (nameFilter) {
      filtered = filtered.filter((user) =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    if (cityFilter) {
      filtered = filtered.filter((user) => user.city === cityFilter);
    }

    if (highlightOldest) {
      const oldestByCity: Record<string, SimplifiedUser> = {};
      filtered.forEach((user) => {
        if (
          !oldestByCity[user.city] ||
          new Date(user.birthDate) < new Date(oldestByCity[user.city].birthDate)
        ) {
          oldestByCity[user.city] = user;
        }
      });
      filtered = filtered.map((user) => ({
        ...user,
        isOldest: oldestByCity[user.city]?.id === user.id,
      }));
    } else {
      filtered = filtered.map((user) => ({ ...user, isOldest: false }));
    }

    setFilteredUsers(filtered);
  }, [nameFilter, cityFilter, highlightOldest, users]);

  return (
    <div className="App">
      {/* Filter management component */}
      <Filters
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        highlightOldest={highlightOldest}
        setHighlightOldest={setHighlightOldest}
        users={users}
      />
      {/* Users Table*/}
      <UserTable users={filteredUsers} />
    </div>
  );
}

export default App;
