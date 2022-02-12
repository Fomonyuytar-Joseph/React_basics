import react , {Component} from "react";

export default class LogButton extends Component{
    handleClick= (event)=>{
        console.log('hello world');
        console.log(event)
    }

    render(){
        return(
            <button onClick={this.handleClick}>Click me !!!!</button>
        )
    }

}