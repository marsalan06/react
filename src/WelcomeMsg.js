import React from "react";
export function WelcomeMsg (){
    const name = "Arsalan";
    const condition = true;
    return(
      <div>
        <h1>{condition ? name : "Unknown User"}</h1> {/*A4*/}
        Welcome to React
      </div>
    );
  } //A3

//A9
export class ClassMethodReact extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }  
  render (){
        const name = this.props.title;
        const condition = true;
        return(
            <div>
                <h1>{condition ? name : "Unknown User"}</h1> {/*A4*/}
                Welcome to React
            </div>
            );
        }
    }
ClassMethodReact.defaultProps={
  title : "Using default Prop"
}

//A12
export class StateClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
    // this.buttonPressed = this.buttonPressed.bind(this);
  }
  buttonPressed(){
    this.setState({
      count: this.state.count +1
    });
  }
  render(){
    return(
    <div>
    <p>Count Class State: {this.state.count}</p>
    <button onClick={()=>this.buttonPressed()}>Click me</button>
    </div>
    )}
}

export default WelcomeMsg