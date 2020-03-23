// import React from 'react';

// import classes from './DrawerToggle.css';

// const drawerToggle = (props) => (
//     <div className={classes.DrawerToggle} onClick={props.clicked}>
//         <div></div>
//         <div></div>
//         <div></div>
//     </div>
// );

// export default drawerToggle
import React from 'react';

import './DrawerToggle.css';
const drawer = props =>(
    <button className="toggle" onClick={props.click}>
        <div className="line"/>
        <div className="line"/>
        <div className="line"/>
    </button>
);

export default drawer;