import react , {Component} from "react";

export default class  MyComponent extends Component{
   state={
       heading:"React is Awwesome",
       content:"Your react content is loading"
   }

   render(){

       const{ heading , content } = this.state;

        return(
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        )
   }
}