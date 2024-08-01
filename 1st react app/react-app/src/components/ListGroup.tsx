// import { Fragment } from "react/jsx-runtime";
// import { MouseEvent, useState } from 'react';
import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {
  
  // items = []

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => setSelectedIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
