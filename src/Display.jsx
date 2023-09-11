import React from 'react'
import HOC from './Component/HOC'
import './Styling/Hoc.css'

const Display = (props) => {
    const Data = props.Data
  return (
    <div className='Hoc-Cont'>
        <h1>Higher Order Component</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
        {
            Data.map((n , index)=>{
                return(
                        <tbody key={index}>
                        <tr>
                            <td>{n.name}</td>
                            <td>{n.age}</td>
                            <td>{n.gender}</td>
                        </tr>
                        </tbody>
                    )
                })
            }
        </table>
    </div>
  )
}

export default HOC(Display)