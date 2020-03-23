// import React from 'react'
// import classes from './ackdrop.css'
// const backdrop=(props)=>
// (
//     props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div>:null
// )
// export default backdrop;
import React from 'react';

import './ackdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
);

export default backdrop;