import React from "react";

const TodoInput = ({ item, handleCheckboxChange }) => {
  return (
    <div className="todo-item">
      <input
        className="check-box"
        type="checkbox"
        onChange={() => handleCheckboxChange(item.id)}
        checked={item.isCompleted}
      />
      <span>{item.text}</span>
    </div>
  );
};

export default TodoInput;
