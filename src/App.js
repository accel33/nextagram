import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    // performing a GET request
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({ users: result.data });
        console.log(result.data);
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  style = {
    width: "300px",
    height: "300px"
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          {this.state.users.map(user => (
            <div key={user.div}>
              <li>
                {user.id}: {user.username}
              </li>
              <img style={this.style} src={user.profileImage} alt="Pic" />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
