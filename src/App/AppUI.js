import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
                    <TodoList>
                        {/* Colocacion de distintos estados */}
                        {error && <p>Desesperate hubo un error ......</p>}
                        {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos */}
                        {loading && <p>Estamos cargando, no desesperes ......</p>}
                        {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
                        {(!loading && !searchedTodos.length) && <p>!!Crea tu primer Todo</p>}


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
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };