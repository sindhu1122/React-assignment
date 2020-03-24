import React, { Component } from 'react'
//mport Timepicker from 'react-time-picker'
import Table from '../components/table/table'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
 import DatePicker from 'react-datepicker';
 import 'react-datepicker/dist/react-datepicker.css';
import SideDraw from '../components/sideDrawer/sideDrawer'
import moment from 'moment'
import './input.css'
import SideDrawer from './sideDrawer/sideDrawer'
import Toolar from './Toolar/Toolar'
import Lackdrop from './ackdrop/ackdrop'
import DrawerToggle from './sideDrawer/DrawerToggle/DrawerToggle'
import Report from './Report/Report';
import Display from '../components/Display/Display'
class Input extends Component{
    state={
        task:'',
        taskList:[],
        starttime:"12:00",
        endtime:"11:00",
        date:new Date(),
        sidedraweropen:false,
        displayActivities: false,
        activitydate:new Date(),
        display:new Date()
      };
      onChange = event => 
      {
          this.setState({ starttime:event.target.value })
      }
    //   onChange = starttime => 
    //   {
    //       this.setState({ starttime })
    
    //   }
      onChangeEnd = event => 
      {
          this.setState({ endtime:event.target.value })
      }
    //   onChangeEnd = endtime => 
    //   {
    //       this.setState({ endtime})
    //   }
      inputChangeHandler = (input)=>{
          this.setState({
            task: input
          });
      }
      drawerHandler = () => {
        this.setState((prevState)=>{
          return{sidedraweropen:!prevState.sidedraweropen}
        });
      }
    
      backdropHandler = () => {
        this.setState({sidedraweropen:false});
      }

      handleChangedate=date=>
      {
        this.setState({date:date})
      }
      handleChangedateActivity=activitydate=>
      {
       // console.log(activitydate)
        this.setState({activitydate:activitydate})
        console.log(this.state)
      }
      onShowActivitiesHandler = () => {
        this.setState({
            displayActivities: !this.state.displayActivities
        })
      }
      prevHadler=()=>{
         let datevar=this.state.activitydate
         datevar.setDate(datevar.getDate()-1)
         console.log(datevar)
         this.setState({activitydate:datevar})
         let currdate=`${this.state.activitydate.getMonth() + 1}/${this.state.activitydate.getDate()}/${this.state.activitydate.getFullYear()}`
         console.log(currdate)
         this.setState({display: currdate})


      }
      nextHadler=()=>{
        let datevar=this.state.activitydate
        datevar.setDate(datevar.getDate()+1)
        this.setState({activitydate:datevar})
        let currdate=`${this.state.activitydate.getMonth() + 1}/${this.state.activitydate.getDate()}/${this.state.activitydate.getFullYear()}`
        console.log(currdate)
         this.setState({display: currdate})

     }
      btnAddHandler = (inputTask,inputTime,endtime)=>{
       
        let item = {
          value: inputTask,
          starttime: inputTime,
          endtime:endtime,
          diff:endtime-inputTime
        }
        let newList = [
            ...this.state.taskList,
            item
          ]
        
          this.setState({
            taskList:newList,
            task: '',

          })
      let day=new Date();
      let i=0;
      let lenOfTasks;
      let isPresent=0;
      this.user=JSON.parse(localStorage.getItem(this.props.username));
      lenOfTasks=this.user.today.length;
      if(lenOfTasks===7)
      {
        this.user.today.shift()
      }
      console.log(this.user.today)
      console.log(lenOfTasks)
      //i=lenOfTasks
       while(i<lenOfTasks){
       i++
       }
     
      
       this.user.today[i-1].date.push(moment( this.state.date).format('L'));
       this.user.today[i-1].dur.push(this.state.starttime)
       this.user.today[i-1].startTime.push((this.state.endtime-this.state.starttime)/60000)
       this.user.today[i-1].endTime.push(this.state.endtime)
       this.user.today[i-1].tasks.push(this.state.task)
     localStorage.setItem(this.props.username,JSON.stringify(this.user))
     this.setState({task:" "})
      
  
      }
    render()
    {
      // let sidedrawer;
      // let backdrop;
  
      // if(this.state.sidedraweropen)
      // {
      //   sidedrawer=<SideDrawer/>
      //   backdrop=<Lackdrop click={this.backdropHandler}/>
      // }
      let user1=JSON.parse(localStorage.getItem(this.props.username))
      console.log(this.user)
        return(
            
              <div>
              
                {/* <div>
          <Toolar drawerClicked={this.drawerHandler} username={this.props.username}/>
            {sidedrawer}
            {backdrop}
          </div> */}
          <div className="ipdiv">
                <input type="text" id="inp" placeholder="Enter activity"  value={this.state.task} onChange={(event)=>this.inputChangeHandler(event.target.value)}/><br></br>
                <label>Enter start time:</label>
                  <TimePickerComponent
                  id="time2"
                onChange={this.onChange}
                value={this.state.starttime}> </TimePickerComponent>&nbsp;&nbsp;
                {/* <input type="time"
                onChange={this.onChange}
                value={this.state.starttime}/><br></br> */}
                <label>Enter end time:</label>
                <TimePickerComponent id="time1"
                
                onChange={this.onChangeEnd}
                value={this.state.endtime}/><br></br>
                {/* <input type="time"
                onChange={this.onChangeEnd}
                value={this.state.endtime}/><br></br> */}
                <label>Enter date</label>
                <DatePicker id="date" dateFormat='dd-MM-yyyy' selected={this.state.date} value={this.state.date} onChange={this.handleChangedate} /><br/><br/> 
                <button id="btn1"
                type="submit"
                onClick={()=> this.btnAddHandler(this.state.task,this.state.starttime,this.state.endtime)} >Add</button><br></br>
                <button id="t1"
                onClick={() => this.onShowActivitiesHandler()}>{!this.state.displayActivities ? 'Show Activities' : 'Close Activities'}</button>
                </div>
              {this.state.displayActivities ?
              
                <table>
                <thead>
                <tr height="15px">
                  <td ><button onClick={()=>this.prevHadler()}>prev</button></td>
                  <td colSpan="3"><DatePicker id="date" dateFormat='dd-MM-yyyy' selected={this.state.activitydate} value={this.state.activitydate} onChange={this.handleChangedateActivity} /><br/><br/> </td>
                  <td><button onClick={()=>this.nextHadler()}>next</button></td>
                </tr>
                <tr>
                        <th>S.no</th>
                        <th>Task</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Duration</th>
                </tr>
                
                </thead>
              {/* {user1.today.map((item,key)=>{
                return item.tasks.map((item1,key)=>{
                return <tr>
                     <td>{item.date[key]}</td> 
                     <td>{item1}</td>
                     <td>{item.startTime[key]}</td></tr>
                    {/* /</tr>/<th>Date</th>:{item.date[key]}  <strong>Task</strong>:{item1}&nbsp;&nbsp;&nbsp;  <strong>duration</strong>:{item.startTime[key]} */}
              
               
              {/* })
                
                }
              )} */} 
              <Display date={this.state.display} username={this.props.username}/>
              </table>:null}
              {/* <Report username={this.props.username}/> */}
            </div>
            
            
        )
    }
}
export default Input