import { useState } from "react";

export const ListRender = () => {
  const [users] = useState([
    { id: 1, name: "Diego" },
    { id: 2, name: "Leandro" },
    { id: 3, name: "Luciana" },
    { id: 4, name: "Claúdio" },
  ]);
  return (
    <>
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))}
    </>
  );
};
