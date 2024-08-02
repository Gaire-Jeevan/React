import './App.css';
import { useState } from 'react';
import Message from './components/Message';

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map(bug => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return <div></div>;
}

export default App;
