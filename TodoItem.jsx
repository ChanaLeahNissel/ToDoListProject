import './ToDoList.css';

function TodoItem({ item, onRemove }){
    return(
        <div className="container">
            <li className="task-item">{ item }</li>
            <button className="remove-button" onClick={onRemove}>Remove</button>
        </div>
    );
}
export default TodoItem;