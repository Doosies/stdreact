const CREATE_TEXT = 'counter/CREATE_TEXT' as const;
const DELETE_TEXT = 'counter/DELETE_TEXT' as const;
const UPDATE_TEXT = 'counter/UPDATE_TEXT' as const;



let nextId = 1;
export const createText = (text: string) => ({type: CREATE_TEXT, text, id: nextId++});
export const deleteText = (id: number) => ({type: DELETE_TEXT, id});
export const updateText = (text: string, id: number) => ({type: UPDATE_TEXT, text, id});


type TextType = {
    id: number;
    text: string;
}[];
type TextAction = 
    | ReturnType<typeof createText>
    | ReturnType<typeof deleteText>
    | ReturnType<typeof updateText>;

const initialTextState: TextType = [];

export default function textReducer(state = initialTextState, action: TextAction) {
    switch (action.type) {
        case CREATE_TEXT:
            return state.concat({id: action.id, text: action.text});
        case DELETE_TEXT:
            return state.filter( text => text.id !== action.id);
        case UPDATE_TEXT:
            return state.map(text =>
                text.id === action.id 
                    ? {...text, text: action.text} 
                    : text
            );
        default:
            return state;
    }
}
