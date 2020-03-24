import React, { Component } from 'react';
import moment from 'moment';
import '../table/table.css'
class Display extends Component{
    render(){
        let c=0
        let  user1 = JSON.parse(localStorage.getItem(this.props.username))
        let date1=this.props.date
        console.log(date1)
        let val =user1.today[0].date.includes(moment( date1).format('L'))
        if(val)
        {
            
            return user1.today[0].date.map((item,key)=>{
                if((moment(date1).format('L'))==moment(item).format('L'))
                {
                    c++
                    return(
                        <tbody>
                            <tr>
                                <td>{c}</td>
                                <td>{user1.today[0].tasks[key]}</td>
                                <td>{moment( user1.today[0].dur[key]).format('HH:mm')}</td>
                                <td>{moment( user1.today[0].endTime[key]).format('HH:mm')}</td>
                                <td>{user1.today[0].startTime[key]}</td>
                            
                            </tr>
                        </tbody>
                        )
                    }

            })
        }
        else{
            return(<tbody><tr>
                <td colSpan="5"><h1>no activities found</h1></td>
                </tr></tbody>)
        }
    }
}
export default Display