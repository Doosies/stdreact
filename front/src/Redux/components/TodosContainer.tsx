import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../modules'
import { addTodo, toggleTodo } from '../modules/todos';
import Todos from './Todos';

function TodosContainer() {
    const todos = useSelector((state:RootState) => state.todos);
    const dispatch = useDispatch();

    const handleCreate = (text: string) => dispatch(addTodo(text));
    const handleToggle = useCallback((id: number) => dispatch(toggleTodo(id)), [dispatch]);

    return(
        <Todos todos={todos} onCreate={handleCreate} onToggle={handleToggle} />
    );
}

export default TodosContainer;