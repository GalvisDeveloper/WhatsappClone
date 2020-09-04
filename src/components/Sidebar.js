
// Imports React
import React, { useState, useEffect } from 'react';

// Imports material-ui core
import { Avatar, IconButton } from '@material-ui/core';

// Imports material-ui icons
import { SearchOutlined } from '@material-ui/icons/';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Imports another files
import "../styles/Siderbar.css";
import SidebarChat from './SidebarChat';
import db from '../firebase';

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data()
                })
            ));

            return () => {
                unsubscribe();
            }
        });
    }, []);

    return (

        <div className="sidebar">

            {/* SideBar Header */}
            <div className="siderbar__header">
                <Avatar src="https://avatars.dicebear.com/api/avataaars/anAvatar.svg?    r=35&b=%23ededed&w=60&style=circle&top[]=shortHair&topChance=32&hatColor[]=white&hairColor[]=black&accessories[]=sunglasses&accessoriesChance=93&facialHair[]=majestic&facialHairChance=72&facialHairColor[]=black&clothes[]=hoodie&clothesColor[]=gray&eyes[]=happy&eyebrow[]=defaultValue&mouth[]=smile&skin[]=tanned" />

                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            {/* SiderBar Search */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start a new chat!" />
                </div>

            </div>

            {/* SiderBar Chats */}
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat
                        id={room.id}
                        key={room.id}
                        name={room.data.name}
                    />
                ))}
            </div>

        </div>
    )
}

export default Sidebar;
