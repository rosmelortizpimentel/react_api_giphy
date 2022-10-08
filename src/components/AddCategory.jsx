import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputVaue, setinputVaue] = useState('Pokemon');

    const onInputChange = (event) => {
        setinputVaue(event.target.value);
    }

    const onSumbit = (event) => {
        event.preventDefault();
        if (inputVaue.trim().length <= 1) return;

        // setCategories(categories => [inputVaue, ...categories]);
        setinputVaue('');
        onNewCategory(inputVaue.trim().toUpperCase());
    }

    return (
        <form onSubmit={onSumbit}>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={inputVaue}
                onChange={onInputChange}
            />
        </form>
    )
}
