import './ToDoList.css';
import TodoApp from './TodoApp.jsx';


function App() {
   const items = [];

   return (
       <div className="App">
           <TodoApp items={items} />
       </div>
   );
}

export default App;

