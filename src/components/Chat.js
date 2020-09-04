
// Imports from react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import from material-ui
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, InsertEmoticon } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
// import SendIcon from '@material-ui/icons/Send';

// Imports from another files
import '../styles/Chat.css';
import db from '../firebase';

function Chat() {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You Typed => ", input);

        setInput('');
    };

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomName(snapshot.data().name)
                ));
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    return (
        <div className="chat">

            {/* Chat Header */}
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at {}...</p>
                </div>

                <div className="chat__headerTools">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            {/* Chat Body */}
            <div className="chat__body">
                {/* message.name === user.displayName */}
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name"> Cristian {/*{message.name}*/}</span>
                    Yo!
                    <span className="chat__timestamp"> 9:10pm </span>
                </p>
            </div>

            {/* Chat Footer */}
            <div className="chat__footer">

                <IconButton>
                    <InsertEmoticon />
                </IconButton>

                <form action="">
                    <input
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                        placeholder="Type a message"
                        type="txt"
                    />
                    <button type="submit" onClick={sendMessage} > Send a message </button>
                </form>

                <IconButton>
                    <MicIcon />
                </IconButton>

            </div>
        </div>
    );
}


export default Chat;





