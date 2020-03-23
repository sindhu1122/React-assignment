// import React from "react";
// import Sidebar from "react-sidebar";
// //  import Backdrop from '../ackdrop/ackdrop';
// //  import classes from './sideDrawer.css'

 
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: true
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }
 
//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }
 
//   render() {
//     return (
//       <Sidebar
//         sidebar={<button>Report</button>}
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{ sidebar: { background: "white" } }}
//       >
//         <div onClick={() => this.onSetSidebarOpen(true)}>
//           Meu
//         </div>
//       </Sidebar>
//     );
//   }
// }
 
// export default App;
// // const sideDrawer =(props)=>
// // {
// //     let attachedClasses = [classes.SideDrawer, classes.Close];
// //     if (props.open) {
// //         attachedClasses = [classes.SideDrawer, classes.Open];
// //     }
// //     return(
// //         <div>
// //             <Backdrop show={props.open} clicked={props.closed}></Backdrop>
// //         <div className={attachedClasses.join(' ')}>
// //             <div className={classes.Logo}>
// //             <button>log</button>
// //             </div>
// //             {/* <nav className={classes.DesktopOnly}>
// //                 <NavigationItems
// //                 isAuthenticated={props.isAuth}></NavigationItems>
// //             </nav> */}
// //         </div>
// //         </div>
// //     )
// // }
// // export default sideDrawer;
import React from 'react';
import './sideDrawer.css';
const sidedrawer = props =>(
   <nav className="side">
       <ul>
           <li><a href="input.js">Activity</a></li>
           <li><a href="/">Report</a></li>
       </ul>
   </nav>
);

export default sidedrawer;