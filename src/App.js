import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    return fetch(process.env.REACT_APP_BACKEND_URL + '/')
      .then(res => res.json())
      .then(data => this.setState({ friends: data.friends }))
      .catch(error => Error("Error fetching friends"));
  }

  render() {
    const friendData = this.state.friends.map(friend => {
      return <main className="friends">
        <h3>Name: {friend.name}</h3>
        <h3>Gender: {friend.gender}</h3>
        <h3>Nickname: {friend.nickname}</h3>
      </main>;
    });
    return <div className="App">{friendData}</div>;
  }
}

export default App;
