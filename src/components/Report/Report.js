import React, { Component } from 'react'
import moment from 'moment';
class Report extends Component{
    // getReport=()=>{
    //     let user1=JSON.parse(localStorage.getItem(this.props.username))
    //     var dateObj = new Date();
    //     var c=0; 
    //     for(let i=0;i<7;i++){
    //         dateObj.setDate(dateObj.getDate-i)
    //         user1.today.map((item,key)=>{
    //             item.tasks.map((item1,key)=>{
    //             if(moment(dateObj).format('L')==moment(item.date[key]).format('L'))
    //             {
    //                     c++
    //             }
                    
    //             })
    //         })
    //     }
    //     return 
        

    // }
    render()
    {
        let user1=JSON.parse(localStorage.getItem(this.props.username))
        //let user1=JSON.parse(localStorage.getItem(this.props.username))
        var dateObj = new Date();
        var c=0;
        var dur =0;
        let durlist=[]
        var datelist=[]
        var taskscou=[]
        for(let i=0;i<7;i++){
            c=0
            dateObj.setDate(dateObj.getDate-i)
            user1.today.map((item,key)=>{
                item.tasks.map((item1,key)=>{
                if(moment(dateObj).format('L')==moment(item.date[key]).format('L'))
                {
                        c++
                        dur=dur+item.startTime[key]
                }
                    
                })
            })
            datelist.push(dateObj)
            taskscou.push(c)
            durlist.push(dur)
        }
        return(
            <div>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>no of tasks</th>
                        <th>Duration</th>
                    </tr>
                {
                datelist.map((item,key)=>{
                    return <tr>
                <td>{item}</td>
                <td>{taskscou[key]}</td>
                <td>{durlist[key]}</td>
                    </tr>
                })
                }
                
                </table>
            </div>
        )
    }
}
export default Report