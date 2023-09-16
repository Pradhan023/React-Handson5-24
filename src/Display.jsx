import React from 'react'
import HOC from './Component/HOC'
import './Styling/Hoc.css'

const Display = (props) => {
    const Data = props.Data
  return (
    <div className='Hoc-Cont'>
        <h1>Higher Order Component</h1><br/>
        <pre>
        <h1>Q. What is Hiher order Component?</h1><br/>
        <h3>Ans. HOC is a function which takes a Wrapped component as input argument and returns a new Enhanced component. It should always be a pure function.</h3><br/>
        <p>so, here in this example of Hoc i took the argument as input('props') which is a wrapped component and this wrapped component is passing all the data 
            <br/>as props moreover following parent to child approach. In Hoc Component from where input is coming , there we are taking or writng function inside 
            <br/>function and passing the enhance function pass props in wrapped.  Here i am invoking the Display function inside Hoc as argument.</p>
        </pre>
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