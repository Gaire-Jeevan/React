import './App.css';
import { useState } from 'react';
import Message from './components/Message';

function App() {
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 5,
  });

const handleClick = () => {
  // const newDrink = {
  //   title: drink.title,
  //   price: drink.price++,
  // }
  setDrink({...drink, price:6});
}

  return (
    <div>{drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
