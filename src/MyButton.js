import react ,{Component} from "react";

export default class MyButton extends Component{
onClick(){
    console.log("clicked")
}

render(){
    return(
        <button onClick={this.onClick}>
            click here
        </button>
    )
}



}