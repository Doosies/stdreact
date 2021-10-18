const SET_DIFF = 'counter/SET_DIFF' as const;
const INCREASE = 'counter/INCREASE'as const;
const DECREASE = 'counter/DECREASE'as const;

// type State = {
//     number: number;
//     diff: number;
// }
const initialState = {
    number: 0,
    diff: 1,
}

export const setDiff = (diff: number) => ({type:SET_DIFF, payload:diff});
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

type Action = 
    | ReturnType<typeof setDiff>
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>;

export default function counter(state = initialState, action: Action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.payload
            }
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            }
        default:
            return state
    }
}

