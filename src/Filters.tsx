import React from 'react';
import { SimplifiedUser } from './Type.tsx';

type FiltersProps = {
  nameFilter: string;
  setNameFilter: (value: string) => void;
  cityFilter: string;
  setCityFilter: (value: string) => void;
  highlightOldest: boolean;
  setHighlightOldest: (value: boolean) => void;
  users: SimplifiedUser[];
};

function Filters({
  nameFilter,
  setNameFilter,
  cityFilter,
  setCityFilter,
  highlightOldest,
  setHighlightOldest,
  users,
}: FiltersProps) {
  const cities = [...new Set(users.map((user) => user.city))];

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <label>
        <input
          type="checkbox"
          checked={highlightOldest}
          onChange={(e) => setHighlightOldest(e.target.checked)}
        />
        Highlight oldest per city
      </label>
    </div>
  );
}

export default Filters;
