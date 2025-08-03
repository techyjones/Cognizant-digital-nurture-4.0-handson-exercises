import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  // Fetch user data when component mounts
  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      const user = data.results[0];
      this.setState({
        user: {
          title: user.name.title,
          firstName: user.name.first,
          image: user.picture.large
        },
        loading: false
      });
    } catch (error) {
      this.setState({ error: "Failed to fetch user", loading: false });
    }
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <p>Loading user...</p>;
    }

    if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
    }

    return (
      <div style={{ border: "1px solid #ccc", padding: "20px", width: "250px" }}>
        <h3>
          {user.title} {user.firstName}
        </h3>
        <img
          src={user.image}
          alt={user.firstName}
          style={{ width: "200px", height: "200px", borderRadius: "10px" }}
        />
      </div>
    );
  }
}

export default Getuser;
