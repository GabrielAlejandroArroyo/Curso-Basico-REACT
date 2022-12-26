import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

//import './App.css';


const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a REACT', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Lalaala', completed: false },

];


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          // Para solucionar el Warning: Each children in a list should have a unic "key" prop, tenemos que utilizar key={todo.text}  
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}

      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
