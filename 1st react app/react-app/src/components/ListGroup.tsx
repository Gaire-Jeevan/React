// import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Kathmandu", "Beiging"];
  items = []

  

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
