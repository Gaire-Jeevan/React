import { BsFillCalendar2Fill } from "react-icons/bs";
import ListGroup from './components/ListGroup/ListGroup';
import Like from './components/Like'
import './App.css'
// import { useState } from 'react';
// import Alert from './components/Alert';
// import Button from './components/Button';


function App() {
  let items = ['New York', 'San Francisco', 'London', 'Kathmandu', 'Beiging'];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }
  // const [alertVisible, setAlertVisibility] = useState(false);
  
  return (
    // Like
    <div>
      <Like onClick={() => console.log('clicked')}></Like>
    </div>

    // <div>
    // <BsFillCalendar2Fill color="red" size="140"/>
    // </div>

    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectedItem}
    //   />
    // </div>

    // <div>
    //   <Alert>
    //   Hello <span>World!</span>
    //     </Alert>
    // </div>

    // <div>
    //   {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
    //   <Button color="danger" onClick={() => setAlertVisibility(true)}>
    //     My Button
    //   </Button>
    // </div>
  );
}

export default App;
