import React from 'react';
import  DrawerToggle from '../sideDrawer/DrawerToggle/DrawerToggle';
import './Toolar.css';
const toolbar = props =>(
    <header className="toolbar">
        <nav className="navigation">
            <div>
                <DrawerToggle click={props.drawerClicked}/>
            </div>
            <div className="menu">Welcome {props.username}</div>
            <div className="spacer" />
            <div className="items">
                <ul>
                    <li><a href="/">Logout</a></li>
                </ul>
                    
            </div>
        </nav>
    </header>
);

export default toolbar;