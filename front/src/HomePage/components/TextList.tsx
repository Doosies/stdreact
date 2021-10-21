import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteText, updateText } from '../modules/text';

type Input = {text: string, id: number}
function TextList({text, id}: Input) {
    const [isClick, setIsCLick] = useState(false);
    const dispatch = useDispatch();

    const handleClickList = () => {setIsCLick(!isClick)};
    const handleClickX = () => {dispatch(deleteText(id))};

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <button
                onClick={handleClickX}
            >X
            </button>
            <div style={{
                cursor: 'pointer',
                color: isClick ? 'red' : 'black',
            }}
            onClick = {handleClickList}
            >
                {text}
            </div>
        </div>
    );
}

export default TextList;