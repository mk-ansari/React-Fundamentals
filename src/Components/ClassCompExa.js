import React, { Component } from "react";

export default class ClassCompExa extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "kamal" };
  }
  render() {
    return (
      <div>
        <h1>
          Your Name is: {this.state.name} & Surname is: {this.props.surname}{" "}
        </h1>{" "}
      </div>
    );
  }
}
