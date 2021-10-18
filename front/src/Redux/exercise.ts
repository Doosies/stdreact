import { listeners } from 'process';
import {createStore} from 'redux';

type Item = {id: number, text: string};

// 초기값
const initialState = {
    counter: 0,
    text: '',
    list: Array({id: 0, text: ''}),
};
const INCREASE = 'INCREASE' as const;
const DECREASE = 'DECREASE' as const;
const CHANGE_TEXT = 'CHANGE_TEXT' as const;
const ADD_TO_LIST = 'ADD_TO_LIST' as const;

const increase = () => ({type: INCREASE});
const decrease = () => ({type: DECREASE});
const changeText = (text: string) => ({
    type: CHANGE_TEXT,
    payload: text,
});
const addToList = (item: Item) => ({
    type: ADD_TO_LIST,
    payload: item,
});

type Action = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof changeText>
    | ReturnType<typeof addToList>;

function reducer(state=initialState, action: Action) {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.payload),
            };
        default: 
            return state;

    }
}

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("hi"));
store.dispatch(addToList({id: 1, text: "add"}));
