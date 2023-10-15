import React, { useState } from 'react';

import { ComposeForm } from './ComposeFrom.jsx';

import INITIAL_HISTORY from '../src/Data/Chatlog.json';

export function Chat(props) {
    const [clickCount, setClickCount] = useState(340)
    const [currentChannel, setCurrentChannel] = useState('general');
    const [messageObjArray, setMessageObjArray] = useState(INITIAL_HISTORY);

    console.log("rendering with channel", currentChannel);

    const addMessage = (userId, userName, text, channel) => {
        const newMessageObj = {
            "userId": userId,
            "userName": userName,
            "userImg": "/img/" + userName + ".jpeg",
            "text": text,
            "timestamp": Date.now(),
            "channel": channel
        }

        console.log(newMessageObj);

        const newMessageArray = [...messageObjArray, newMessageObj];

        setMessageObjArray(newMessageArray); //update state & render

    }

    const handleClick = (event) => {
        // console.log('you clicked me!');
        // setClickCount(clickCount + 1)//put that into state (in RAM, the corner)
        // //ANND it re-renders the component

        //setCurrentChannel('birds'); //changes the state variable (in RAM)
        //And re-renders the component
        addMessage('Nice Job!', 'Where is that?', 'Spooky', 'Sheeeeshhh');
    }


    //What we look like

    //DATA!! -- an array of messages

    const messagesToShow = messageObjArray
        .filter((messageObj) => {
            return messageObj.channel === currentChannel; //keep
        })
        .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

    // let contentToShow = null;
    // if(messageObjArray.length === 0) {
    //     contentToShow = <p>No messages yet!</p>
    // } else {
    //content!! [<MessasgeItem>]
    const messageElemArray = messageObjArray.map((messageObj) => {
        const messageElem = <MessageItem userName={messageObj.userName} userImg={messageObj.userImg}
            text={messageObj.text}
            key={messageObj.timestamp} />

        return messageElem; //put it in the new array
    });

    //     contentToShow = messageElemArray;
    // }

    return (
        <div className='scrollable-pane'>
            <div className='pt-2 my-2'>
                <button onClick={handleClick} className="btn btn-success">Click me!</button>
                <p>You clicked me {clickCount} times</p>
            </div>
            <hr />

            {/* Messages */}

            {messageObjArray.length === 0 && <p>No messages found</p>
            }

            {messageElemArray}


            <ComposeForm />
        </div>
    )
}

function MessageItem(props) {
    console.log(props);
    const userName = props.userName;
    const userImg = props.userImg;
    const text = props.text;
    console.log('rendering', text);

    const [isLiked, setIsLiked] = useState(false);

    const handleClick = function (event) {
        setIsLiked(!isLiked);
    }

    //decide what it looks like

    let buttonColor = 'grey';
    if (isLiked) {
        buttonColor = 'red';//filled in
    }

    return (
        <div className="message d-flex mb-3">
            <div className='me-2'>
                <img src={userImg} alt={userName + "'s avatar"} />
            </div>
            <div className='flex-grow-1'>
                <p className="user-name">{userName}</p>
                <p>{text}</p>
                <button className='btn like-button' onClick={handleClick}> <span className='material-icons' style={{ color: buttonColor }}>favorite_border</span>
                </button>
            </div>
        </div>
    )
}