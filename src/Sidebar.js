
// Imports React
import React from 'react';

// Imports material-ui core
import { Avatar, IconButton } from '@material-ui/core';

// Imports material-ui icons
import { SearchOutlined } from '@material-ui/icons/';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Imports another files
import "./Siderbar.css";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (

        <div className="sidebar">

            {/* SideBar Header */}
            <div className="siderbar__header">
                <Avatar />

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
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>

        </div>
    )
}

export default Sidebar;
