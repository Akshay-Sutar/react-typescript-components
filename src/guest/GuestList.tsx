import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClickAdGuest = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClickAdGuest}>Add Guest</button>
    </div>
  );
};

export default GuestList;
