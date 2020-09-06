
// Imports from react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import from material-ui
import { Avatar, IconButton, Button } from '@material-ui/core';
import { SearchOutlined, InsertEmoticon } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

// Imports from another files
import '../styles/Chat.css';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';

function Chat() {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomName(snapshot.data().name)
                ));

            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => doc.data())
                    )
                ));
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    };

    return (
        <div className="chat">

            {/* Chat Header */}
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>
                        Last seen at {" "}
                        {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
                    </p>
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
            {/* message.name === user.displayName */}
            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                        <span className="chat__name"> {message.name} </span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
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

                <Button type="submit" onClick={sendMessage}>
                    <SendIcon />
                </Button>

            </div>
        </div >
    );
}


export default Chat;





