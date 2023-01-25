import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // why this place to intialise state because class is intialise first time the constructor called first by default
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Constructor");
  }
  componentDidMount() {
    // Best Place to API calls because  it happen after Render
    console.log("componentDidMount");
  }

  render() {
    const { count } = this.state;
    console.log("render");
    return (
      <div>
        <h1> Profile Class Components</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            //We do not mutate state directly
            //Never do this.state = something
            //instead do this way👇//
            this.setState({ count: 1 });
          }}
        >
          setCount
        </button>
      </div>
    );
  }
}

export default Profile;
