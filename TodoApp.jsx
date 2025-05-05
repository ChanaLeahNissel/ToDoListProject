/*Chana Leah Nissel*/
import React from 'react';
import TodoItem from './TodoItem';
import { useState } from 'react';
import './ToDoList.css';


function TodoApp({ items }){
    const[list, setList] = useState([]);
    const[inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setList([...list, inputValue]);
      setInputValue("");

    };

    const removeItem = (index) => {
      setList(list.filter((_, i) => i!== index));
    };

    return(
        <div className="container">

          <h1 className="header">My To Do List</h1>

          <form className="form" onSubmit={handleSubmit}>
            <label>
              Add a task: 
              <input className="input-field" type="text" value={inputValue} onChange={handleChange}/>
            </label>
            <button className="add-button" type="submit">Add</button>
          </form>

          <ul className="task-list">
            {items.length == 0 ?(
              <li>No items in the to do list.</li>
            ) : (
              items.map((item, index) => (
              <TodoItem key={index} item={item} onRemove={() => removeItem(index)}/>
            )))}
          </ul>

        </div>
    );
}
export default TodoApp;



