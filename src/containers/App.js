import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
// import { robot } from "./robot";
import Scroll from "../components/Scroll"
import '../containers/App.css'

class App extends Component{
  
  constructor(){
    super()
    this.state = {
      robot: [],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robot:users}));
  }
  onSearchChange = (event) =>{
    this.setState({searchfield:event.target.value})
    
    // console.log(filteredRobots)
  }

  render(){
    const {robot, searchfield} = this.state;
    const filteredRobots =robot.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robot.length) {
      return <h1>Loading</h1>
    }else{
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
          <CardList robot={filteredRobots} />
          </Scroll>
        </div>
      );
    }
    }
    
    
}

export default App;
