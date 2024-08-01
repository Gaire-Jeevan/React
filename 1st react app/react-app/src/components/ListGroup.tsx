// import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from 'react';

function ListGroup() {
  let items = ['New York', 'San Francisco', 'London', 'Kathmandu', 'Beiging'];
  // items = []
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group" onClick={handleClick}>
        {items.map(item => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
