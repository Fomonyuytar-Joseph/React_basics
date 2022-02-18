import react from "react";

export default function Test(){
    const pStyle ={
        fontsize:'16px',
        color:"blue"

    }
    return(
       <>
        <h1 style={pStyle}>Hello world</h1>
        <p  style={{ ...pStyle , textAlign:"center"}}>Hello Joseph</p>
        </>
    )
}