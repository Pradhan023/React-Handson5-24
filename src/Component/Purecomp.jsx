import React, { PureComponent } from "react";
import '../Styling/Pure.css'

class Pcomp extends PureComponent{
    state={
        Question : 'Q. What is Pure Compoent ?',
        Ans : 'Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. So, This answer or explation line as expample of Pure Component to make it unique. here i am take button to re-render the state again but when you hit the button(Answer) value which is the the answer line dont get re-render again mean it perform invisible or visible function and again because of PureComponent method which is predefined react method. It prevent the re-rendering.   ',
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
            <div className="ans-fl">
            <button onClick={this.show}><span>Answer.</span></button>
            {this.state.val?'':<h3>{this.state.Ans}</h3>}
            </div>

            </div>
        )
    }
}
export default Pcomp