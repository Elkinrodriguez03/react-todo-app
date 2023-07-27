import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI'

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
  const [todos, saveTodos] = useLocalStorage('TODOs_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const todoDone = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); 
  }

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    todoDone={todoDone}
    deleteTodo={deleteTodo}
    />
  )
}

export default App;
