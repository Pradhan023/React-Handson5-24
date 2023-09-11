import React, { PureComponent } from "react";
import '../Styling/Pure.css'

class Pcomp extends PureComponent{
    state={
        Question : 'Q. What is Pure Compoent ?',
        Ans : 'Pure Components in React are the components which do not re-renders when the value of state and props has bee updated with the same values.',
        val: true,
        data:[]
    }
    show = ()=>{
        this.setState({val: false})
    }
    render(){
        console.log("Im Pure Soul")
        return(
            <div className="Pure-cont">
            <h1>{this.state.Question}</h1>
            <button onClick={this.show}><span>Answer.</span></button>
            {this.state.val?'':<h3>{this.state.Ans}</h3>}

            </div>
        )
    }
}
export default Pcomp