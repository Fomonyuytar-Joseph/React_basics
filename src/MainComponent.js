import react from "react";

class MainComponent extends react.Component{
    state={
        name:''
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("thanks for submiting the form");
        console.log(this.state.name);
    }
render(){
 
    return(
       <form onSubmit={this.handleSubmit}>
           <label>
            Name:
            <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.setState({name: event.target.value})}/>
           </label>
           <input
           type="submit"
           value="submit"/>
       </form> 
    )

}        
}

export default MainComponent