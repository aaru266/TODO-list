import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function TextList({ list, deleteItem, editItem }) {
  return (
    <ListGroup>
      {list.map((item, index) => (
        <div key={index}>
          <ListGroup.Item variant="light" action style={{ display: "flex", justifyContent: "space-between" }}>
            {item.value}
            <span>
              <Button style={{ marginRight: "10px" }} variant="dark" onClick={() => deleteItem(item.id)}>
                Delete
              </Button>
              <Button variant="dark" onClick={() => editItem(index)}>
                Edit
              </Button>
            </span>
          </ListGroup.Item>
        </div>
      ))}
    </ListGroup>
  );
}

export default TextList;
