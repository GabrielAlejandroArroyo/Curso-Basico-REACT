import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

// Skeletons
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
    // Hook userContext
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {/* Colocacion de distintos estados */}
                {error && <TodosError error={error} />}
                {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos */}
                {loading && <TodosLoading />}
                {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}


                {searchedTodos.map(todo => (
                    // Para solucionar el Warning: Each children in a list should have a unic "key" prop, tenemos que utilizar key={todo.text}  
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}

            </TodoList>
            {openModal && (
                <Modal>
                    {/* <p>{searchedTodos[0]?.text}</p> */}
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };