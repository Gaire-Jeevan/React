// import { Fragment } from "react/jsx-runtime";
// import { MouseEvent, useState } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import './ListGroup.css';
// import styles from './ListGroup.module.css';

const List = styled.ul`
  list-style: none;
  padding: 2;

`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps> `
  padding: 5px;
  background: ${props => props.active ? 'blue' : 'none'}
`

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
      <List>
        {items.map((item, index) => (
          <ListItem
           active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
