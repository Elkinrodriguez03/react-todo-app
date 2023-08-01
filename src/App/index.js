import React from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Todo item 1', completed: true},
//   { text: 'Todo item 2', completed: true},
//   { text: 'Todo item 3', completed: false},
//   { text: 'Todo item 4', completed: false},
//   { text: 'LALALALLALA', completed: false},
// ]

// localStorage.setItem('TODOs_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOs_V1');

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
