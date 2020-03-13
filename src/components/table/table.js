import React, { Component } from 'react'
import './table.css'
class Table extends Component
{
    render()
    {
        return(
            <div>
                <table >
                    <tr>
                        <th>Date</th>
                        <th>Task</th>
                        <th>Duration</th>
                    </tr>
                    <tr>
                        <td>{this.props.date}</td>
                        <td>{this.props.task}</td>
                        <td>{this.props.dur}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Table