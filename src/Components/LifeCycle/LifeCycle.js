import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
    console.log("Constructor Call");
  }
  componentWillMount() {
    console.log("Component will mount!");
  }
  componentDidMount() {
    console.log("componentDidMount Call");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update!");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate Call");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount Call");
  }

  render() {
    console.log("Render Call");

    return (
      <div>
        <h1> My Favorite Color is {this.state.favoritecolor} </h1>{" "}
        <button onClick={() => this.setState({ favoritecolor: "yellow" })}>
          Update Color
        </button>
      </div>
    );
  }
}
