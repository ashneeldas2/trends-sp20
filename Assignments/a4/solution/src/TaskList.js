import React from 'react';
import { useState } from 'react';
import Task from './Task';

export default () => {

  const [itemId, setItemId] = useState(0);
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  }

  const addTask = () => {
    setItems([...items, { id: itemId, text: text }])
    setItemId(itemId + 1);
    setText("");
  }

  const removeTask = (i) => () => {
    items.splice(i, 1);
    setItems([...items]);
  }

  return (
    <div>
      <ul>{items.map((item, i) => <Task key={item.id} onDelete={removeTask(i)} desc={item.text} />)}</ul>
      <input onChange={changeText} value={text} />
      <button onClick={addTask}> Add new task </button>
    </div>
  );

}