import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    todoDone,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
        <React.Fragment>
          <TodoCounter /> 
          <TodoSearch />
          <TodoList>
              {loading && <TodosLoading /> }
              {error && <TodosError />}
              {(!loading && searchedTodos.length <= 1) && <EmptyTodos />}

              {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => todoDone(todo.text)} 
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>    
    
          <CreateTodoButton 
            setOpenModal = {setOpenModal}
          />

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
    
        </React.Fragment>
      );
}

export { AppUI };