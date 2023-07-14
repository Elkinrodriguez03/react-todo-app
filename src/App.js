import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  { text: 'Todo item 1', completed: true},
  { text: 'Todo item 2', completed: false},
  { text: 'Todo item 3', completed: true},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter 
        completed={15}
        total={30}
      /> 
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
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
