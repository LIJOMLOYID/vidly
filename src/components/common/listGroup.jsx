import React from "react";

const ListGroup = (props) => {
  const { items } = props;
  return (
    <ul class="list-group">
      {items.map((item) => (
        <li key={item._id} class="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
