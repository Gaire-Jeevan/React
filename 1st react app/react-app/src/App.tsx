import './App.css';
import { useState } from 'react';
import Message from './components/Message';

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // add
    setTags([...tags, 'exiciting'])

    // remove
    setTags(tags.filter(tag => tag != 'happy'))

    // update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
  };

  return <div></div>;
}

export default App;
