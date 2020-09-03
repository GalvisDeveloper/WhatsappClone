
// Imports from react
import React, { useEffect, useState } from 'react';

// Imports from material-ui
import { Avatar } from '@material-ui/core';

// Imports another files
import './SidebarChat.css';

function SidebarChat({ addNewChat }) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
            // database stuff
        }
    };

    return !addNewChat ? (
        <div className="sidebar__chat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last msg</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add new chat</h2>
            </div>
        );
}

export default SidebarChat;
