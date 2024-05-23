import React, { useState, useMemo } from 'react';

const User = React.memo(function User({ user }) {
  console.log(`Rendering: ${user.name}`);
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
});

function UserList({ users }) {
  const [filter, setFilter] = useState('');

  const filteredUsers = useMemo(() => //try to remove this useMemo
    users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase())),
    [filter, users]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div>
        {filteredUsers.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

// Example users data
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" }
];

function Memo() {
  return <UserList users={users} />;
}

export default Memo;
