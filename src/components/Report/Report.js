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
        console.log(user1)
        var dateObj = new Date();
        dateObj.setDate(dateObj.getDate()+1)
        console.log(dateObj)
        var c=0;
        let durlist=[]
        var datelist=[]
        var taskscou=[]
        for(let i=0;i<7;i++){
            c=0;
            let dur=0
            dateObj.setDate(dateObj.getDate()-1)
            console.log(moment( dateObj).format('L'))
            user1.today[0].date.map((item,key)=>{
                
                    console.log(item)
                if((moment(dateObj).format('L'))==moment(item).format('L')&&user1.today[0].startTime[key]!=null)
                {
                        c++
                        dur=dur+user1.today[0].startTime[key]
                }
                    
               if(!datelist.includes(moment( dateObj).format('L')))
               {
                datelist.push(moment( dateObj).format('L'))
                taskscou.push(c)
                durlist.push(dur)}
                else{
                    let h=datelist.indexOf(moment( dateObj).format('L'))
                    taskscou[h]=c
                    durlist[h]=dur
                }
                
        })
        console.log(datelist)
        console.log(taskscou)
        
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