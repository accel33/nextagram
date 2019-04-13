import React, { Component } from "react";
import UserImages from "../containers/UserImages";
import styled from "styled-components";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.setState({
      users: this.props.users
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => (
            <div className="containerBox" key={index}>
              <div className="imageUserBox">
                <img
                  className="imageUser"
                  style={this.style}
                  src={user.profileImage}
                  alt="Pic"
                />
                <Link to={`/users/${user.id}`} className="centerText">
                  {user.username}
                </Link>
              </div>
              <UserImages id={user.id} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const MyContent = styled.div`
  background: white;

  .body {
    color: white;
  }
`;

const styles = {
  container: {
    marginLeft: "100px",
    backgroundColor: "",
    maxWidth: "90 %"
  },
  userList: {
    padding: "20px",
    fontFamily: "Sree Krushnadevaraya",
    fontSize: "20px",
    display: "inline-block"
  },
  profileImages: {
    borderRadius: "50%"
  },
  userName: {
    fontSize: "20px",
    color: "black"
  }
};
export default HomePage;
