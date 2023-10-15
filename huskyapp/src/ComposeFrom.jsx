import React, { useState } from 'react';

export function ComposeForm(props) {

    const [typeValue, setTypedValue] = useState('');

    const handleClick = (event) => {
        console.log('posting text', typeValue);
        setTypedValue(''); //clear the input
    }

    const handleChange = (event) => {
        const whatUserTyped = event.target.value;
        setTypedValue(whatUserTyped);
    }



    return (
        <form className='my-2'>
            <div className='input-group'>
                <textarea
                onChange={handleChange} className='form-control' rows='2' placeholder='Type a new message'></textarea>
                <button onClick={handleClick}className='btn btn-secondary' type='button'>
                    <span className='material-icons'>send</span>
                </button>
            </div>
        </form>
    );
}