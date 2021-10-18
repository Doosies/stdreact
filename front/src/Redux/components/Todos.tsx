import React, { useState } from 'react'
import todos, { TodoStateType } from '../modules/todos';

interface TodoItemType {
    todo: TodoStateType
    onToggle: (id: number) => void;
}
const TodoItem = React.memo(({todo, onToggle}:TodoItemType) => {
    return (
        <li
            style={{textDecoration: todo.done ? 'line-through' : 'none' }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
});

interface TodoListType {
    todos: TodoStateType[];
    onToggle: (id: number) => void;
}
const TodoList = React.memo(({todos, onToggle}:TodoListType)=>{
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
            ))}
        </ul>
    );
});

interface TodosType {
    todos: TodoStateType[];
    onCreate: (text: string) => void;
    onToggle: (id: number) => void;
}
function Todos({todos, onCreate, onToggle}:TodosType) {
    const [text, setText] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    placeholder="할 일을 입력하세요.."
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default Todos;