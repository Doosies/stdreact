const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;

let nextId = 1;
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text: text,
    }
});
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    id: id
});

const initialState: State[] = [];

interface State {
    id: number;
    text: string;
    done?: boolean;
}
type Action = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>;

export default function todos(state: State[] = initialState, action: Action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map( todo =>
                todo.id === action.id 
                    ? {...todo, done: !todo.done}
                    : todo
            );
        default:
            return state;
    }
}