import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    // const fetchUsers = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       'https://jsonplaceholder.typicode.com/users'
    //     );
    //     setUsers(res.data);
    //   } catch (error) {
    //     setError((error as AxiosError).message);
    //   }
    // };

    // fetchUsers();
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then(response => setUsers(response.data))
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      })

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
