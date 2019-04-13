import React from "react";
import UserImages from "../containers/UserImages";
import image from "../images/config.png";

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      username: "",
      profileImage: ""
    };
  }
  componentDidMount() {
    const { users, match } = this.props;
    users.forEach(user => {
      if (user.id === parseInt(match.params.id)) {
        this.setState({
          username: user.username,
          profileImage: user.profileImage
        });
      }
    });
  }

  render() {
    //const [images] = this.state.images;
    //{this.props.users.map((user, index) => {
    return (
      <div className="papaDiv">
        <header>
          <img className="imageBox profilePic" src={this.state.profileImage} alt="profile" />
          <section className="userInfo">
            <h4>{this.state.username}</h4>
            <button>Edit profile</button>
            <div><img className="icon" src={image} alt="config"></img></div>
          </section>
        </header>
        <UserImages id={this.props.match.params.id} />
      </div>
    );
  }
}

export default UserProfilePage;
