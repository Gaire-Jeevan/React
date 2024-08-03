import { useState } from 'react';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  // exercise 1

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   }
  // })

  // exercise 2

  // const [pizza, setPizza] = useState({
  //   name: 'SPicy Pepperoni',
  //   toppings: ['Mushroom'],
  // });

  // exercise 3

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });

  const handleClick = () => {
    // exercise 1

    // setGame({...game, player: { ...game.player, name: "BOB"}})

    // // exercise 2
    // setPizza({...pizza, toppings :[...pizza.toppings, 'Cheese']})

    // exercise 3

    setCart({
      ...cart,
      items: cart.items.map(item =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    // exercise 1

    // <div>
    //   {game.player.name}
    //   <button onClick={handleClick}>Change Name</button>
    // </div>

    // exercise 2
    // <div>
    //   {pizza.toppings}
    //   <button onClick={handleClick}>Click Me</button>
    // </div>

    // exercise 3
    <div>
      {cart.items.map(item => (
        <p key={item.id}>
          {item.title}: {item.quantity}
        </p>
      ))}
      
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
