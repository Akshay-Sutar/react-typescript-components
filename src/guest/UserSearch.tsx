import { useState } from 'react';

const users = [
  { name: 'Tony', age: 35 },
  { name: 'Steve', age: 125 },
  { name: 'Peter', age: 25 },
  { name: 'Natasha', age: 35 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const searchUser = () => {
    let searchedUser = users.find((x) => x.name === name);
    setUser(searchedUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={searchUser}>Search User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
