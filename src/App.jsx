import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("error al consultar api", error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div>
        <h1>Lista de usuarios</h1>
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.username}</p>
        </div>
      ))}
    </>
  );
}

export default App;
