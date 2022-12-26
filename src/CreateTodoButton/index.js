import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onclickButton = (msg) => {
        alert(msg)
    };

    return (
        <button
            className="CreateTodoButton"

            onClick={() => onclickButton('Aqui se deberia abrir el modal')}
        // onClick={() => console.log('Clic')}
        >
            +
        </button >
    );
}

export { CreateTodoButton };