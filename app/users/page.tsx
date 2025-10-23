import React from "react";

interface user {
  id: number;
  name: string;
}

const UserPages = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: user[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPages;