import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextList from "./Tasks/TextList";
import TaskInput from "./Tasks/TaskInput";


function App() {
  const [list, setList] = useState([]);

  const addTask = (value) => {
    const newItem = {
      id: Math.random(),
      value: value
    };
    setList([...list, newItem]);
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const editItem = (index) => {
    const editedItem = prompt("Edit the todo:");
    if (editedItem !== null && editedItem.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedItem;
      setList(updatedList);
    }
  };

  return (
    <Container>
      <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem", fontWeight: "bolder" }}>
        TO-DO LIST
      </Row>
      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
        <TaskInput addTask={addTask} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <TextList list={list} deleteItem={deleteItem} editItem={editItem} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
