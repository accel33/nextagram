import React, { Component } from "react";
import Axios from "axios";

class UserImages extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    Axios.get(
      `https://insta.nextacademy.com//api/v1/images?userId=${this.props.id}`
    )
      .then(result => {
        this.setState({
          images: result.data
        });
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }

  render() {
    return (
      <div className="userImages">
        {this.state.images.map((image, index) => {
          return <img key={index} className="imageBox" src={image} alt="Pic" />
        })}
      </div>
    );
  }
}

export default UserImages;
