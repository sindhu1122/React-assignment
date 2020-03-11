import React, { Component } from 'react'
//mport Timepicker from 'react-time-picker'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
 import DatePicker from 'react-datepicker';
 import 'react-datepicker/dist/react-datepicker.css';
import Signup from './Signup/Signup'
//import moment from 'moment'
import './input.css'
class Input extends Component{
    state={
        task:'',
        taskList:[],
        starttime:"10:00",
        endtime:"10:00",
        date:new Date()
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
      handleChangedate=date=>
      {
        this.setState({date:date})
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
      //   if(day!=this.user.today[i].date)
         i++;
      //   else
      //   {
      //     isPresent=1;
      //     break;
      //   }
       }
      
       this.user.today[i-1].date.push(this.state.date);
       this.user.today[i-1].startTime.push((this.state.endtime-this.state.starttime)/60000)
       this.user.today[i-1].endTime.push(this.state.endtime)
       this.user.today[i-1].tasks.push(this.state.task)
     localStorage.setItem(this.props.username,JSON.stringify(this.user))
      

      }
    render()
    {
      let user1=JSON.parse(localStorage.getItem(this.props.username))
      console.log(this.user)
        return(
            <div>
                <input type="text" id="inp" placeholder="Enter activity" onChange={(event)=>this.inputChangeHandler(event.target.value)}/><br></br>
                <label>Enter start time</label>
                  <TimePickerComponent
                onChange={this.onChange}
                value={this.state.starttime}> </TimePickerComponent><br></br> 
                {/* <input type="time"
                onChange={this.onChange}
                value={this.state.starttime}/><br></br> */}
                <label>Enter end time</label>
                <TimePickerComponent
                onChange={this.onChangeEnd}
                value={this.state.starttime}/>
                {/* <input type="time"
                onChange={this.onChangeEnd}
                value={this.state.endtime}/><br></br> */}
                <label>Enter date</label>
                <DatePicker dateFormat='dd-MM-yyyy' selected={this.state.date} value={this.state.date} onChange={this.handleChangedate} /><br/><br/> 
                <button id="btn1"
                type="submit"
                onClick={()=> this.btnAddHandler(this.state.task,this.state.starttime,this.state.endtime)} >Add</button>
                <ul>
              {user1.today.map((item,key)=>{
                return item.tasks.map((item1,key)=>{
                return <li> <strong>Date:</strong>{item.date[key]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <strong>Task</strong>:{item1}&nbsp;&nbsp;&nbsp;  <strong>duration</strong>:{item.startTime[key]}</li>})
                
                }
              )}
              </ul>
            </div>
        )
    }
}
export default Input