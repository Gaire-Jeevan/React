import './App.css';
import { useState } from 'react';

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',

    // avoid this
    contact: {
      address:{
        street: '',
      }
    }
  });

  const [isLoading, setLoading] = useState(false);

  return <div></div>;
}

export default App;
