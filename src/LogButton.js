import react , {Component} from "react";

export default class LogButton extends Component{
    state={
        name:''
      }

      handleChange(event){
          this.setState({name:event.target.value})
          console.log(event.target)
      }

    render(){
        return(
            <>
                <p> Hi {this.state.name}</p>
      <input
      type="text"
      name="firstName"
      onChange={ this.handleChange.bind(this)}
      value={this.state.name}
      />
  
      
    <p>{this.props.value}</p>
     </>
        )
    }

}