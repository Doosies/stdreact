import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextList from './components/TextList';
import { RootState } from './modules';
import { createText } from './modules/text';

function App() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const textList = useSelector((state:RootState) => state.text);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createText(text));
        setText('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
    // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => set

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={text}/>
                <button type='submit'>입력</button>
            </form>
            {textList.map(text => (
                <TextList key={text.id} text={text.text} id={text.id}/>
            ))}
        </div>
    )
}

export default App;