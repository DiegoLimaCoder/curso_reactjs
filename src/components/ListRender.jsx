import { useState } from "react";

export const ListRender = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Diego" },
    { id: 2, name: "Leandro" },
    { id: 3, name: "Luciana" },
    { id: 4, name: "Claúdio" },
  ]);

  const deleteRamdom = () => {
    const ramdomNumber = Math.floor(Math.random() * 5);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => ramdomNumber !== user.id)
    );
  };
  return (
    <>
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))}

      {/* Previous state */}
      <button onClick={deleteRamdom}>Delete random user</button>
    </>
  );
};
