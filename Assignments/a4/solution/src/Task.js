import React from 'react';

export default ({ desc, onDelete }) => {
  const onInput = (event) => {
    onDelete();
  }
  return <li> <input type="checkbox" onChange={onInput}></input> {desc}</li>
}