import react from "react";

class MainComponent extends react.Component{
    formatName(firstName, lastName) {
        return firstName + ' ' + lastName;
        }
render(){
    const firstName="Fomonyuytar";
    const lastName="Joseph";
    return(
        <>
        <p>Hello World</p>
        <p>{this.formatName(firstName , lastName)}</p>
        </>
    )

}        
}

export default MainComponent