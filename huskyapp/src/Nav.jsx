import React from 'react';

export function History(props) {

    //data! (an array of strings)
    const CHANNEL_NAMES_ARRAY = ['Yesterday', '2 Days Ago', '3 Days Ago', '4 Days Ago'];

    //content!! (an array of `<li>`)
    const liArray = CHANNEL_NAMES_ARRAY.map((channelNameString) => {
        const liElm = (
            <li className="test" key={channelNameString}>
                <a href={"/" + channelNameString}>{channelNameString}</a>
            </li>
        )
        return liElm; //put it in the new array
    })

    return (
        <nav className="text-light bg-secondary h-100 py-3 px-1">
            <ul className='channel'>
                {liArray}
            </ul>
        </nav>
    )
}