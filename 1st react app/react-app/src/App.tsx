// import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';


function App() {
  // let items = ['New York', 'San Francisco', 'London', 'Kathmandu', 'Beiging'];
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);

  return (
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
    <div>
      <Button color="danger" onClick={() => console.log('Clicked')}>
        My Button
      </Button>
    </div>
  );
}

export default App;
