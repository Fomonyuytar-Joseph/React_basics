import react from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends react.Component{
  state = {
    name:"Joseph"
  }

  setName(name){
    this.setState({ name:name });
  }

    render(){
    
    return (
      <ChildComponent
      name={this.state.name}
      setName={this.setName.bind(this)}
      
      />
    )
    }
}

export default ParentComponent