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
// import React from 'react';
// import './sideDrawer.css';
// import activities from '../input'
// import { BrowserRouter as Router, Link,Switch, Route } from 'react-router-dom';
// import Report from '../Report/Report';
// const sidedrawer = props =>(
//     <Router>
//     <nav className="side">
//         <ul>
//             <Link to="/activities">Activities</Link>
//              <Link to="/report">Report</Link>    
//         </ul>
        
//     </nav>
//    <Switch>
//         {/* <Route path="/activities" component=/>  */}
//      <Route path="/report" exact component={Report} />
//      </Switch >
    
     
//      </Router>
// );

// export default sidedrawer;
import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Activities from '../input';
import Reports from '../Report/Report';
import './sideDrawer.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div >
                <div className="header">
                <Menu >
                    <Link to="/activities">Activities</Link>
                    <Link to="/report">Report</Link>
                </Menu>
                
                <label className="HelloUser"><h2>Hello {this.props.username}!!</h2></label>
                 
                <button  onClick={this.props.onLogout} style={{ backgroundColor:"white" ,color:"#282c34" }} className="LogoutBtn">LOGOUT</button> 
                </div>
                {/* <h1>Hello {this.props.name}</h1> */}
                <div>
                <Switch>
                    <Route path="/activities">
                        <Activities username={this.props.username}/>
                    </Route>
                    <Route path="/report">
                        <Reports username={this.props.username} />
                    </Route>
                </Switch>
                </div>
            </div>

        );
    }
};
export default Sidebar