//this app is an example of two way binding 


import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props)  //this line should always will be present in case of a stateful component ( class component )

    this.state = {
      text: ''
    }
  }

//this is a method for handling the changes in the input box ... once when the user enters
//anything, it will be stored in the event variable (its a built in variable).
// we can access what the user entered using "event.target.value". Then we set that to our state variable 'text'
  onHandleChange = (event)=>{
    console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  //this is two way binding ...
  // 1. value={this.state.text} means the route from this.state.text ( whats stored in the text variable will be reflected inside the box)
  //      for ex .. initialize line 12 as text: 'smruti' and see the browser
  // 2. onChange method is the route from input box to the state... that is explained in line 16


  //then we simply display what we type using the line 37
  render() {
    return (
      <div>
        <form>
          <input value={this.state.text} onChange={this.onHandleChange}></input> 
        </form>

        
        <div>{this.state.text}</div>



      </div>
    );
  }
}

export default App;


// Your task is to make this app have three input boxes and display those informations one by one 