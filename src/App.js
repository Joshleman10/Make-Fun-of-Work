import React, {Component} from 'react';
import Body from "./components/body";

class App extends Component {
  handleKeydown(e) {
    if(e.keyCode === 13){
      console.log("the");
    }
  }

  render(){
  return (
    <div onKeyDown={this.handleKeydown}>
      <Body></Body>
    </div>
  );
}
}

export default App;


//Set up the player (after hard coding a single player
//also think about how to integrate multiple players
//as well as adding new players)

//set up the scoring system...("space bar counts as 1 
//task completed")

