import React, { Component } from "react";
import "./App.scss";
import Axios from "axios";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";

import { Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";

class App extends Component {
  state = {
    loading: false,
    users: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    Axios.get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        this.setState({
          users: result.data,
          loading: false
        });
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loader />;
    } else {
      return (
        <div>
          <NavBar />
          <Route
            exact
            path="/"
            component={props => (
              <HomePage {...props} users={this.state.users} />
            )}
          />
          <Route
            path="/users/:id"
            component={props => (
              <UserProfilePage {...props} users={this.state.users} />
            )}
          />
          {/* <FlexibleButton text="Default" color="red" size="20" /> */}
        </div>
      );
    }
  }
}

export default App;
