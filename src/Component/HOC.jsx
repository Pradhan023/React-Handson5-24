import React, { useState } from 'react'

const HOC = (Wrapped) => {
    function New(){
        const[data] = useState([
            {name:'Anish Pradhan' , age:24 , gender:'M'},
            {name:'Akanksha Bagul' , age:25 , gender:'F'},
            {name:'Mukesh Thakur' , age:24 , gender:'M'},
            {name:'Narji Begum' , age:25 , gender:'F'},
            {name:'Sumit Sharma' , age:24 , gender:'M'},
            {name:'Surbhi Parihar' , age:25 , gender:'F'},
            {name:'Prince Kumar' , age:24 , gender:'M'},
            {name:'Himanshi Bedi' , age:24 , gender:'F'},
        ])
    return (
        <div>
        <Wrapped Data={data} /> 
    </div>
  )
}
return New
}

export default HOC