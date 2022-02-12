import react from "react";

export default class ChildComponent extends react.Component{
    render(){
        return(
            <>
            <p>Hello world my name is {this.props.name}</p>
            <button onClick={ ()=> this.props.setName("Fomonyuytar")} >
                Change my name 
            </button>
            </>
        )
    }
}