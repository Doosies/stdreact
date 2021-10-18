import {combineReducers} from 'redux';
import text from './text';
import counter from '../../Redux/modules/counter'
import todos from '../../Redux/modules/todos'

const rootReducer = combineReducers({
    text,
    counter,
    todos
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
